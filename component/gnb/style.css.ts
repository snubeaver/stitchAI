import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = recipe({
  base: {
    width: '100%',
    maxWidth: 1440,
    minHeight: 96,

    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',

    padding: '20px 80px',

    userSelect: 'none',
    cursor: 'pointer',
  },
  variants: {
    type: {
      app: {
        justifyContent: 'space-between',
      },
      web: {
        justifyContent: 'center',
      },
    },
  },
});

export const logo = style({
  width: 110,
  height: 24,
});

export const menu = style({
  display: 'flex',
  alignItems: 'center',

  gap: 40,
});

export const menuItem = recipe({
  base: [font.outfit.r16],
  variants: {
    active: {
      true: {
        color: color.white[100],
      },
      false: {
        color: color.white[50],
      },
    },
  },
});
