import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const sectionLabel = style([
  font.outfit.r20,
  {
    color: color.black[50],
  },
]);

export const platforms = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const platform = recipe({
  base: [
    font.outfit.r16,
    {
      width: 'fit-content',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 8,

      cursor: 'pointer',
    },
  ],

  variants: {
    selected: {
      true: {
        padding: '14px 22px',
        border: `2px solid ${color.purple[100]}`,
      },
      false: {
        padding: '15px 23px',
        border: `1px solid ${color.black[30]}`,
      },
    },
  },
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
