import { createVar, style } from '@vanilla-extract/css';

import { font, utilities } from '@/styles/global';

export const colorVar = createVar();
export const backgroundColorVar = createVar();

export const wrapper = style([
  font.outfit.l12,
  utilities.flexCenter,
  {
    width: 'fit-content',

    padding: '2px 8px',

    color: colorVar,
    backgroundColor: backgroundColorVar,

    borderRadius: 20,
  },
]);
