import { color } from '@/assets/color';

export const keyframeSkeletonInLight = {
  '0%': { backgroundColor: color.black[10] },
  '50%': { backgroundColor: color.black[5] },
  '100%': { backgroundColor: color.black[10] },
};

export const keyframeSkeletonInDark = {
  '0%': { backgroundColor: color.white[10] },
  '50%': { backgroundColor: color.white[5] },
  '100%': { backgroundColor: color.white[10] },
};

export const utilities = {
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  absoluteCenter: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  absoluteCenterX: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  absoluteCenterY: {
    top: '50%',
    transform: 'translateY(-50%)',
  },

  address: {
    fontVariantLigatures: 'no-contextual',
  },
};

export const font = {};
