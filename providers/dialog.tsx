'use client';

import { MemoryMarketCardDetail } from '@/app/memory-market/_components/card-detail';
import { Dialog } from '@/components/dialog';
import { overlay } from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const { openedAny, reset } = useDialog();

  return (
    <>
      {children}

      {openedAny && <div className={overlay} onClick={reset} />}

      <Dialog id="memory-market-card">
        <MemoryMarketCardDetail />
      </Dialog>
    </>
  );
};

export default DialogProvider;
