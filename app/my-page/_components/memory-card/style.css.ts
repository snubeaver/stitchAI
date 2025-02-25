import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 16,

  padding: '20px 24px',

  backgroundColor: color.white[100],
  borderRadius: 8,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const title = style([
  font.outfit.r20,
  {
    minHeight: 48,

    color: color.black[100],
  },
]);

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
});

export const price = style([
  font.outfit.r20,
  {
    color: color.black[100],
  },
]);
export const priceLabel = style([
  font.outfit.l14,
  {
    opacity: 0.76,
    color: color.black[60],
  },
]);
