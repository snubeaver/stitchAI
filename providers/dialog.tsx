'use client';

import { MemoryMarketCardDetail } from '@/app/memory-market/_components/card-detail';
import { AgentCardDetail } from '@/app/my-page/_components/agent-card-detail';
import { CreateAgent } from '@/app/my-page/_components/create-agent';
import { ImportMemory } from '@/app/my-page/_components/import-memory';
import { Dialog } from '@/components/dialog';
import { overlay } from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const { openedAny, reset } = useDialog();

  return (
    <>
      {children}

      {openedAny && <div className={overlay} onClick={reset} />}

      <Dialog id="memory-market-card" content={<MemoryMarketCardDetail />} />
      <Dialog id="agent-card-detail" content={<AgentCardDetail />} />
      <Dialog id="create-agent" content={<CreateAgent />} />
      <Dialog id="import-memory" content={<ImportMemory />} />
    </>
  );
};

export default DialogProvider;
