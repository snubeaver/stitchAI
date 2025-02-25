import { useState } from 'react';

import { mockMyAgentDetail, mockSelectableMemories } from '@/app/my-page/_mock';
import { color } from '@/assets/color';
import IconBack from '@/assets/icon/icon-back.svg';
import IconClose from '@/assets/icon/icon-close.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';

import * as style from './style.css';

interface Props {
  handlePrev: () => void;
}
export const AgentCardDetailSelectMemory = ({ handlePrev }: Props) => {
  const [selectedMemory, setSelectedMemory] = useState<string>();

  const agent = mockMyAgentDetail.find(i => i.id === '1');

  if (!agent) return;
  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          <div className={style.headerWithIcon}>
            <div className={baseStyle.closeButton} onClick={handlePrev}>
              <IconBack width={24} height={24} fill={color.black[30]} />
            </div>
            {agent.name}
          </div>

          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>
      </div>
      <div className={style.sectionMemories}>
        <div className={style.label}>Select Memory</div>
        {mockSelectableMemories.map(memory => (
          <div
            className={style.memory({ selected: selectedMemory === memory.id })}
            key={memory.id}
            onClick={() => setSelectedMemory(memory.id)}
          >
            {memory.name}
          </div>
        ))}
      </div>

      <div className={style.footer}>
        <ButtonPrimary text="Select" onClick={handlePrev} />
      </div>
    </>
  );
};
