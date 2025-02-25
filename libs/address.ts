import { Address } from 'viem';

interface TruncateAddressOptions {
  firstLimit?: number;
  lastLimit?: number;
}
export const truncateAddress = (addr?: Address, options?: TruncateAddressOptions): Address => {
  if (!addr || addr === '0x') return '0x';

  const firstLimit = options?.firstLimit || 4;
  const lastLimit = options?.lastLimit || 4;

  const zerox = addr.slice(0, 2) === '0x' ? 2 : 0;
  return (addr.slice(0, zerox + firstLimit) +
    '...' +
    addr.slice(-lastLimit, addr.length)) as Address;
};
