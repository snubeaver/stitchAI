'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as style from './primary.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;

  size?: 'medium' | 'large';
  full?: boolean;
}

export const ButtonPrimary = ({
  text,
  iconLeading,
  iconTrailing,
  size = 'large',
  full,
  onClick,
  ...rest
}: Props) => {
  return (
    <button className={style.wrapper({ full, size })} onClick={onClick} {...rest}>
      {iconLeading && <>{iconLeading}</>}
      {text}
      {iconTrailing && <>{iconTrailing}</>}
    </button>
  );
};
