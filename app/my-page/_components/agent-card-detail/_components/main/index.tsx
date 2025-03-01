import { mockMyAgentDetail } from '@/app/my-page/_mock';
import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import IconDelete from '@/assets/icon/icon-delete.svg';
import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

import * as style from './style.css';

interface Props {
  handleNext: () => void;
  agent: {
    id: string;
    name: string;
    memoryHash: string;
    platform: string;
    socialLink: string;
    description: string;
    memory: {
      id: string;
      name: string;
    };
  };
}
export const AgentCardDetailMain = ({ handleNext, agent }: Props) => {
  const { close } = useDialog('agent-card-detail');

  // const agent = mockMyAgentDetail.find(i => i.id === '1');

  const handleDeleteMemory = () => {};
  const handleSelectMemory = () => handleNext();

  if (!agent) return;
  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          {agent.name}

          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Memory</div>
          {agent.memoryHash}
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Platform</div>
          {agent.platform}
        </div>

        <div className={style.headerInfo}>
          <div className={style.headerInfoLabel}>Social Link</div>
          {agent.socialLink}
        </div>
      </div>

      <div className={style.sectionDescription}>
        <div className={style.descriptionLabel}>Description</div>
        <div className={style.description}>{agent.description}</div>
      </div>

      <div className={style.sectionMemory}>
        <div className={style.memoryLabel}>Memory</div>
        {agent.memory ? (
          <div className={style.memory}>
            {agent.memory.name}

            <div className={style.memoryButton} onClick={handleDeleteMemory}>
              Delete
              <IconDelete width={16} height={16} fill={color.black[30]} />
            </div>
          </div>
        ) : (
          <div
            className={style.memoryButton}
            onClick={handleSelectMemory}
            style={{ color: color.blue[100] }}
          >
            <IconPlus width={16} height={16} fill={color.blue[100]} />
            Select Memory
          </div>
        )}
      </div>

      <div className={style.footer}>
        <ButtonPrimary text="Save & Launch" />
      </div>
    </>
  );
};
