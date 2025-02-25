import { assignInlineVars } from '@vanilla-extract/dynamic';
import { HTMLAttributes } from 'react';

import { color as colorAsset } from '@/assets/color';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;

  color?: string;
  backgroundColor?: string;
}

export const Badge = ({
  text,

  color = colorAsset.white[100],
  backgroundColor = colorAsset.blue[100],

  ...props
}: Props) => {
  return (
    <div
      className={style.wrapper}
      style={assignInlineVars({
        [style.colorVar]: color,
        [style.backgroundColorVar]: backgroundColor,
      })}
      {...props}
    >
      {text}
    </div>
  );
};
