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

  cursor: 'pointer',
});

export const header = style([
  font.outfit.r20,
  {
    color: color.black[100],
  },
]);

export const body = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 4,
});

export const info = style([
  font.outfit.l14,
  {
    display: 'flex',
    alignItems: 'center',

    gap: 8,
  },
]);
