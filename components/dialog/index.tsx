'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ReactNode } from 'react';

import { useDialog } from '@/hooks/use-dialog';

import * as style from './style.css';

interface Props {
  id: string;
  content: ReactNode;

  width?: string;
  height?: string;
}

export const Dialog = ({ id, content, width = '630px', height = 'fit-content' }: Props) => {
  const { opened } = useDialog(id);

  if (!opened) return;
  return (
    <div
      className={style.content}
      style={assignInlineVars({ [style.widthVar]: width, [style.heightVar]: height })}
    >
      {content}
    </div>
  );
};
