'use client';

import { HTMLAttributes } from 'react';

import { color } from '@/assets/color';
import { Badge } from '@/components/badge';
import { Memory } from '@/entities/user';
import { useDialog } from '@/hooks/use-dialog';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  memory: Memory;
}

export const MemoryCard = ({ memory, ...props }: Props) => {
  const { open: openDialogMemoryCardDetail } = useDialog('memory-card');

  const badgeBackgroundColor =
    memory.type === 'AGENT'
      ? color.blue[100]
      : memory.type === 'EXTERNAL'
        ? color.purple[100]
        : color.black[100];

  return (
    <div
      className={style.wrapper}
      onClick={() =>
        openDialogMemoryCardDetail({
          params: {
            memoryId: memory.id,
            type: memory.type,
          },
        })
      }
      {...props}
    >
      <div className={style.header}>
        <Badge text={memory.type} backgroundColor={badgeBackgroundColor} />
        <div className={style.title}>{memory.title}</div>
      </div>
      <div className={style.priceWrapper}>
        <div className={style.price}>{formatNumeric(memory.price, { prefix: '$' })}</div>
        <div className={style.priceLabel}>/month</div>
      </div>
    </div>
  );
};
