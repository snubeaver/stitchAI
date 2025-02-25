import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const main = style({
  height: '100dvh',
  minHeight: '810px',
});

export const content = style({
  maxWidth: 1440,
  margin: '0 auto',

  paddingTop: 82,
});

export const contentInner = style({
  position: 'relative',
  height: 372,

  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const symbol = style([
  utilities.absoluteCenterX,
  {
    position: 'absolute',
    top: 0,

    width: 216,
    height: 216,

    objectFit: 'cover',
  },
]);

export const title = style([
  font.outfit.thin60,
  {
    color: color.white[100],

    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
]);

export const button = style([
  utilities.absoluteCenterX,
  {
    position: 'fixed',
    bottom: 60,
  },
]);
