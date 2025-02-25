import { style } from '@vanilla-extract/css';

import { utilities } from '@/styles/global';

export const main = style({});

export const button = style([
  utilities.absoluteCenter,
  {
    position: 'fixed',
  },
]);
