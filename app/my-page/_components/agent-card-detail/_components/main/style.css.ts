import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const headerInfo = style([
  font.outfit.r16,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 4,

    color: color.black[100],
  },
]);

export const headerInfoLabel = style({
  color: color.black[50],
});

export const sectionDescription = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const descriptionLabel = style([
  font.outfit.r20,
  {
    color: color.black[50],
  },
]);
export const description = style([
  font.outfit.l14,
  {
    color: color.black[100],
  },
]);

export const sectionMemory = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});
export const memoryLabel = style([
  font.outfit.r20,
  {
    color: color.black[50],
  },
]);

export const memory = style([
  font.outfit.l14,
  {
    width: '100%',
    height: 52,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '0px 20px',

    borderRadius: 8,
    border: `2px solid ${color.purple[100]}`,
  },
]);

export const memoryButton = style([
  font.outfit.r14,
  {
    height: 30,

    display: 'flex',
    alignItems: 'center',
    gap: 4,

    color: color.black[30],

    cursor: 'pointer',
  },
]);

export const footer = style([utilities.flexCenter, {}]);
