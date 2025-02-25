interface NumericOptions {
  prefix?: string;
  suffix?: string;

  decimal?: number;

  abbr?: boolean;
  abbrDecimal?: number;

  abs?: boolean;
  trim?: boolean;
}
export const formatNumeric = (value: number | string, options?: NumericOptions): string => {
  if (!value) return '0';

  const {
    prefix,
    suffix,
    decimal = 2,
    abbr = true,
    abbrDecimal = 2,
    abs = false,
    trim = true,
  } = options || {};

  const plainValue = parseNumeric(value, { decimal, abbr });
  if (isNaN(Number(plainValue))) return '0';

  let res: string;

  const num = parseFloat(plainValue);
  if (abbr && num >= 1000) {
    const abbreviations = [
      { value: 1e18, symbol: 'Qn' },
      { value: 1e15, symbol: 'Qd' },
      { value: 1e12, symbol: 'T' },
      { value: 1e9, symbol: 'B' },
      { value: 1e6, symbol: 'M' },
      { value: 1e3, symbol: 'K' },
    ];

    const abbreviation = abbreviations.find(item => num >= item.value);

    if (abbreviation) {
      const scaledNum = num / abbreviation.value;
      res =
        (trim
          ? scaledNum.toFixed(abbrDecimal).replace(/\.?0+$/, '')
          : scaledNum.toFixed(abbrDecimal)) + abbreviation.symbol;
    } else {
      res = num.toFixed(decimal);
    }
  } else {
    let parts = plainValue.split('.');
    if (parts.length > 1) {
      parts = [parts[0], parts[1]];
    }
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    res = parts.join('.');

    if (trim && parts.length > 1) {
      res = res.replace(/\.?0+$/, '');
    }
  }

  if (abs) {
    res = res.replace(/^-/, '');
  }

  if (!plainValue || plainValue === '0') return '0';
  return `${prefix || ''}${res}${suffix || ''}`;
};

export const parseNumeric = (value: number | string, options?: NumericOptions): string => {
  if (!value) return '0';
  if (isNaN(parseFloat(value.toString())) || parseFloat(value.toString()) >= 1e18) return '0';

  const { decimal = 2, abs = false } = options || {};

  let _value = value.toString();
  const isNegative = _value?.trim()?.startsWith('-');

  const units: Record<string, number> = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, Qn: 1e18, Qd: 1e15 };
  _value = _value.replace(/,/g, '').toUpperCase();
  const match = _value.match(/(-?\d+(\.\d+)?)([KMBTQdQn])$/);

  if (match) {
    const num = parseFloat(match[1]) * (units[match[3]] || 1);
    _value = num.toString();
  }

  const firstDecimalIndex = _value.indexOf('.');
  if (firstDecimalIndex !== -1) {
    _value =
      _value.slice(0, firstDecimalIndex + 1) +
      _value.slice(firstDecimalIndex + 1).replace(/\./g, '');
  }

  const numericValue = _value.replace(/[^\d.]/g, '');
  const trimmedValue = numericValue.includes('.')
    ? numericValue.slice(0, numericValue.indexOf('.') + decimal + 1)
    : numericValue;

  if (!trimmedValue) return '0';

  return isNegative && !abs ? '-' + trimmedValue : trimmedValue;
};

export const ensureNonNegative = <T extends number | bigint>(value: T): T => {
  if (typeof value === 'number') {
    if (value < 0) return 0 as T;
    return value as T;
  }

  if (value < 0n) return 0n as T;
  return value as T;
};
