'use client';

import { useGetMarketAgentMemory } from '@/api/get-market-agent-memories';
import { useGetMarketExternalMemory } from '@/api/get-market-external-memories';
import { Gnb } from '@/components/gnb';

import { MemoryMarketCard } from './_components/card';
import * as style from './style.css';

export default function Page() {
  const { data: agentMemory } = useGetMarketAgentMemory();
  const { data: externalMemory } = useGetMarketExternalMemory();

  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>
        <div className={style.title}>Memory Market</div>

        <div className={style.contentInner1}>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>Agent Memory</div>
            <div className={style.cards}>
              {agentMemory?.map(memory => <MemoryMarketCard key={memory.id} memory={memory} />)}
            </div>
          </div>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>External Memory</div>
            <div className={style.cards}>
              {externalMemory?.map(memory => <MemoryMarketCard key={memory.id} memory={memory} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
