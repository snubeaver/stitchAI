import { format } from 'date-fns';

import { useGetMarketAgentMemory } from '@/api/get-market-agent-memories';
import { useGetMarketExternalMemory } from '@/api/get-market-external-memories';
import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import IconDownFill from '@/assets/icon/icon-down-fill.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';
import { truncateAddress } from '@/libs/address';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';
import { useEthTransfer } from '@/api/buy-transaction';

export const MemoryMarketCardDetail = () => {
  const { params, close } = useDialog('memory-market-card');
  const { memoryId, type } = params || {};
  const receiver = "0xba55bdbf959df826da6c35487eb15fad2164662d"

  const { data: agentMemory } = useGetMarketAgentMemory();
  const { data: externalMemory } = useGetMarketExternalMemory();

  const memoryDetail =
    type === 'AGENT'
      ? agentMemory?.find(i => i.id === memoryId)
      : externalMemory?.find(i => i.id === memoryId);

  const { transfer, isReady } = useEthTransfer({
    onSuccess: (txHash) => {
      console.log('>>> ', txHash);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleBuy = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await transfer(receiver as `0x${string}`, '0.001');
    } catch (error) {
      // Error is already handled by onError callback
      console.error(error);
    }
      };

  if (!memoryDetail) return;
  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          {memoryDetail.title}

          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Curator</div>
          {truncateAddress(memoryDetail.curator as `0x${string}`)}
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Last Updated</div>
          {format(new Date(memoryDetail.updatedAt), 'MMM d, yyyy')}
        </div>
      </div>

      <div className={style.sectionBuy}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(memoryDetail.price, { prefix: '$' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>

        <ButtonPrimary text="Buy Now" onClick={handleBuy} />
      </div>

      {memoryDetail.description && (
        <div className={style.sectionDescription}>
          <div className={style.descriptionLabel}>Description</div>
          <div className={style.description}>{memoryDetail.description}</div>
        </div>
      )}

      {memoryDetail.metadata?.coverage && (
        <div className={style.sectionCoverage}>
          <div className={style.coverageLabel}>Coverage</div>
          <div className={style.coverageWrapper}>
            <div className={style.coverageSource}>Source</div>
            {memoryDetail.metadata.coverage.map(coverage => (
              <div key={coverage.source} className={style.coverage}>
                {coverage.source}
                <IconDownFill
                  width={16}
                  height={16}
                  fill={color.black[30]}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
