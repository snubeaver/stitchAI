import { createVar, keyframes, style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const widthVar = createVar();
export const heightVar = createVar();

const overlayKeyframes = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: color.black[80],
  position: 'fixed',
  inset: 0,
  animation: `${overlayKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
  backdropFilter: 'blur(4px)',

  zIndex: 10,
});

export const content = style([
  utilities.absoluteCenter,
  {
    height: heightVar,
    width: widthVar,

    padding: '20px 24px',

    borderRadius: '8px',
    backgroundColor: color.white[100],

    position: 'fixed',
    zIndex: 11,

    animation: `${contentKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,

    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
]);

export const header = style({
  display: 'flex',
  flexDirection: 'column',
});

export const title = style([
  font.outfit.m28,
  {
    color: color.black[100],

    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
]);

export const closeButton = style([
  utilities.flexCenter,
  {
    width: 48,
    height: 48,

    borderRadius: 9999,
    backgroundColor: color.black[5],

    cursor: 'pointer',
    transition: 'background-color 150ms ease-in-out',

    ':hover': {
      backgroundColor: color.black[10],
    },
  },
]);
