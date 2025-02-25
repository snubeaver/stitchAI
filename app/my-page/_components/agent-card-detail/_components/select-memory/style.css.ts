import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const headerWithIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const sectionMemories = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const label = style([
  font.outfit.r20,
  {
    color: color.black[50],
  },
]);

export const memory = recipe({
  base: [
    font.outfit.l14,
    {
      width: '100%',
      height: 52,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      borderRadius: 8,

      cursor: 'pointer',
    },
  ],

  variants: {
    selected: {
      true: {
        padding: '0px 21px',
        border: `2px solid ${color.purple[100]}`,
      },
      false: {
        padding: '0px 22px',
        border: `1px solid ${color.black[30]}`,
      },
    },
  },
});

export const footer = style([utilities.flexCenter, {}]);
