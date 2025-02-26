import { style } from '@vanilla-extract/css';

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

export const input = style([
  font.outfit.r20,
  {
    width: '100%',
    height: 48,

    padding: '12px 0px',
    borderBottom: `1px solid ${color.black[30]}`,

    ':focus': {
      borderBottom: `1px solid ${color.black[30]}`,
    },
  },
]);

export const textarea = style([
  font.outfit.l14,
  {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',

    height: 124,
    minHeight: 124,
    maxHeight: 124,

    resize: 'none',

    padding: '12px 24px',

    border: `1px solid ${color.black[30]}`,
    borderRadius: 8,

    ':focus': {
      padding: '12px 24px',
      border: `1px solid ${color.black[30]}`,
    },
  },
]);

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
