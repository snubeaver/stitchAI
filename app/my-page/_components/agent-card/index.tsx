'use client';

import { HTMLAttributes } from 'react';

import { useDialog } from '@/hooks/use-dialog';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  agentId: string;
  name: string;

  memoryHash: string;
  platform: string;
}

export const AgentCard = ({ agentId, name, memoryHash, platform, ...props }: Props) => {
  const { open: openDialog } = useDialog('agent-card-detail');

  return (
    <div className={style.wrapper} onClick={() => openDialog({ params: { agentId } })} {...props}>
      <div className={style.header}>{name}</div>
      <div className={style.body}>
        <div className={style.info}>
          <div>Memory</div>
          <div>{memoryHash}</div>
        </div>
        <div className={style.info}>
          <div>Platform</div>
          <div>{platform}</div>
        </div>
      </div>
    </div>
  );
};
