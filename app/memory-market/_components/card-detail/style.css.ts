import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

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

export const sectionBuy = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
});

export const price = style([
  font.outfit.r20,
  {
    color: color.black[100],
  },
]);
export const priceLabel = style([
  font.outfit.l14,
  {
    opacity: 0.76,
    color: color.black[60],
  },
]);

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

export const sectionCoverage = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});
export const coverageLabel = style([
  font.outfit.r20,
  {
    color: color.black[50],
  },
]);

export const coverageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const coverageSource = style([
  font.outfit.r16,
  {
    color: color.black[100],
  },
]);
export const coverage = style([
  font.outfit.l14,
  {
    color: color.black[100],

    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
]);
