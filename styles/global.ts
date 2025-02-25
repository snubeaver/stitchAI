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

export const font = {
  outfit: {
    r16: {
      fontFamily: 'Outfit',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.48px',
    },

    thin60: {
      fontFamily: 'Outfit',
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '64px',
      letterSpacing: '-2.4px',
    },
  },
};
