import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

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

export const comingSoon = style([
  utilities.absoluteCenter,
  font.outfit.m28,
  {
    position: 'fixed',
    color: color.white[100],
  },
]);
