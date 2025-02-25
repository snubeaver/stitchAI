'use client';

import { HTMLAttributes } from 'react';

import { color } from '@/assets/color';
import { Badge } from '@/components/badge';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  category: string;
  name: string;

  price: number;
  priceLabel: string;
}

export const MemoryCard = ({ name, category, price, priceLabel = '/month', ...props }: Props) => {
  const badgeBackgroundColor =
    category === 'Agent Memory'
      ? color.blue[100]
      : category === 'External Memory'
        ? color.purple[100]
        : color.black[100];

  return (
    <div className={style.wrapper} {...props}>
      <div className={style.header}>
        <Badge text={category} backgroundColor={badgeBackgroundColor} />
        <div className={style.title}>{name}</div>
      </div>
      <div className={style.priceWrapper}>
        <div className={style.price}>{formatNumeric(price, { prefix: '$' })}</div>
        <div className={style.priceLabel}>{priceLabel}</div>
      </div>
    </div>
  );
};
