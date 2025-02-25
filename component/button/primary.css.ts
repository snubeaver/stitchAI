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
    },
  ],
  variants: {
    size: {
      medium: {
        padding: '8px 12px',
      },
      large: {
        padding: '16px 20px 16px 24px',
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
