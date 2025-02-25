'use client';

import { Gnb } from '@/components/gnb';

import { MemoryMarketCard } from './_components/card';
import { mockAgentMemory, mockExternalMemory } from './_mock';
import * as style from './style.css';

export default function Page() {
  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>
        <div className={style.title}>Memory Market</div>

        <div className={style.contentInner1}>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>Agent Memory</div>
            <div className={style.cards}>
              {mockAgentMemory.map(memory => (
                <MemoryMarketCard key={memory.id} memoryId={memory.id} {...memory} />
              ))}
            </div>
          </div>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>External Memory</div>
            <div className={style.cards}>
              {mockExternalMemory.map(memory => (
                <MemoryMarketCard key={memory.id} memoryId={memory.id} {...memory} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
