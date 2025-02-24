export const IS_LOCAL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true';

export const IS_MAINNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'mainnet';
export const IS_DEVNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'devnet';

export const API_URL = IS_LOCAL
  ? 'http://localhost:8080'
  : IS_MAINNET
    ? ''
    : IS_DEVNET
      ? ''
      : 'http://localhost:8080';
