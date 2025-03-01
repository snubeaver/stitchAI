interface Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export const createQuerystring = (request?: Request) => {
  const { ...remains } = request || {};

  let res = '?';
  if (remains) {
    Object.keys(remains).forEach(key => {
      const value = remains[key];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => {
            if (v) res += `&${key}=${v}`;
          });
        } else {
          res += `&${key}=${value}`;
        }
      }
    });
  }

  if (res === '?') return '';

  // remove initial ?& character
  return res.replace(/\?&/g, '?');
};
