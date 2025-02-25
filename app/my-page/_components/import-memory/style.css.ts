import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
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

export const dropzone = recipe({
  base: [
    font.outfit.r16,
    utilities.flexCenter,
    {
      width: '100%',
      height: 120,

      border: `1px dashed ${color.black[30]}`,
      borderRadius: 8,

      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',
    },
  ],

  variants: {
    isDragAccept: {
      true: {
        borderColor: 'transparent',
        backgroundColor: color.blue[100],
        color: color.white[100],
      },
      false: {
        borderColor: color.black[30],
        color: color.black[30],
        backgroundColor: color.black[5],
      },
    },
  },
});

export const dropzoneHover = style({
  borderColor: color.black[30],
});

export const dropzoneTextWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flexDirection: 'column',
});

export const dropzoneText1 = style([font.outfit.r16, {}]);

export const dropzoneText2 = style([font.outfit.l14, {}]);

export const underline = style({
  textDecoration: 'underline',
  textDecorationColor: color.black[30],
  textDecorationThickness: 1,
  textUnderlineOffset: 2,
});

export const fileList = style({
  maxHeight: 94,
  overflow: 'auto',

  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 12,
  rowGap: 4,
});

export const fileItem = style([
  font.outfit.r16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
]);

export const remove = style({
  cursor: 'pointer',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
