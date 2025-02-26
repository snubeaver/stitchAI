import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const wrapper = recipe({
  base: [
    utilities.flexCenter,
    font.outfit.r16,
    {
      flexShrink: 0,
      gap: '12px',

      borderRadius: 8,
      background: 'linear-gradient(180deg, #4E66FF -8.04%, #7300FF 100%)',

      color: color.white[100],
      cursor: 'pointer',

      ':disabled': {
        background: color.black[10],
        color: color.black[30],
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    size: {
      medium: {
        padding: '8px 12px',
      },
      large: {
        padding: '16px 24px 16px 20px',
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
  },
});

export const normal = recipe({
  base: [
    utilities.flexCenter,
    font.outfit.r16,
    {
      flexShrink: 0,
      gap: '12px',

      borderRadius: 8,
      background: color.black[5],

      color: color.black[100],
      cursor: 'pointer',

      ':disabled': {
        background: color.black[10],
        color: color.black[30],
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    size: {
      medium: {
        padding: '8px 12px',
      },
      large: {
        padding: '16px 24px 16px 20px',
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
  },
});
