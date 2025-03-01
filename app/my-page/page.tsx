'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { useGetUser } from '@/api/get-user';
import { color } from '@/assets/color';
import IconDownload from '@/assets/icon/icon-download.svg';
import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { Gnb } from '@/components/gnb';
import { useDialog } from '@/hooks/use-dialog';

import { AgentCard } from './_components/agent-card';
import { MemoryCard } from './_components/memory-card';
import { mockMyAgents } from './_mock';
import * as style from './style.css';

export default function Page() {
  const router = useRouter();
  const { isConnected } = useAccount();

  const { data: user } = useGetUser();

  const { open: openDialogCreateAgent } = useDialog('create-agent');
  const { open: openDialogImportMemory } = useDialog('import-memory');

  useEffect(() => {
    if (!isConnected) router.replace('/main');
  }, [isConnected, router]);

  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>
        <div className={style.title}>My Page</div>

        <div className={style.contentInner1}>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>
              My Agents
              <ButtonPrimary
                text="Create"
                iconLeading={<IconPlus width={20} height={20} fill={color.white[100]} />}
                onClick={() => openDialogCreateAgent()}
              />
            </div>
            <div className={style.cards}>
              {mockMyAgents.map(agent => (
                <AgentCard key={agent.id} agentId={agent.id} {...agent} />
              ))}
            </div>
          </div>
          <div className={style.contentInner2}>
            <div className={style.contentTitle}>
              My Memory
              <ButtonPrimary
                text="Import"
                iconLeading={<IconDownload width={20} height={20} fill={color.white[100]} />}
                onClick={() => openDialogImportMemory()}
              />
            </div>
            <div className={style.cards}>
              {user?.memory.map(memory => <MemoryCard key={memory.id} memory={memory} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
