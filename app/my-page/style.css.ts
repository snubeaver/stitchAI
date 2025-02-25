import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const main = style({});

export const content = style({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: 1440,

  padding: '0 80px',
  margin: '0 auto',
});

export const title = style([
  font.outfit.m40,
  {
    padding: '36px 0 24px 0',
    color: color.white[30],
  },
]);

export const contentInner1 = style({
  display: 'flex',
  gap: 80,
});

export const contentInner2 = style({
  display: 'flex',
  flexDirection: 'column',

  flex: 1,

  gap: 24,
});

export const contentTitle = style([
  font.outfit.m28,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: 56,

    color: color.white[100],
  },
]);

export const cards = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  gap: '20px',
});
