import { format } from 'date-fns';

import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import IconDownFill from '@/assets/icon/icon-down-fill.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';
import { formatNumeric } from '@/libs/numeric';

import { mockAgentMemoryDetail } from '../../_mock';
import * as style from './style.css';

export const MemoryMarketCardDetail = () => {
  const { params, close } = useDialog('memory-market-card');
  const { memoryId } = params || {};

  const memoryDetail = mockAgentMemoryDetail.find(i => i.id === memoryId);

  if (!memoryDetail) return;
  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          {memoryDetail.name}

          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Creator</div>
          {memoryDetail.creator}
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Last Updated</div>
          {format(new Date(memoryDetail.lastUpdated), 'MMM d, yyyy')}
        </div>
      </div>

      <div className={style.sectionBuy}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(memoryDetail.price, { prefix: '$' })}</div>
          <div className={style.priceLabel}>{memoryDetail.priceLabel}</div>
        </div>

        <ButtonPrimary text="Buy Now" />
      </div>

      <div className={style.sectionDescription}>
        <div className={style.descriptionLabel}>Description</div>
        <div className={style.description}>{memoryDetail.description}</div>
      </div>

      <div className={style.sectionCoverage}>
        <div className={style.coverageLabel}>Coverage</div>
        <div className={style.coverageWrapper}>
          <div className={style.coverageSource}>Source</div>
          {memoryDetail.coverage.map(i => (
            <div key={i.source} className={style.coverage}>
              {i.source}
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
    </>
  );
};
