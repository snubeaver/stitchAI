import { useFormContext } from 'react-hook-form';

import { color } from '@/assets/color';
import IconArrowNext from '@/assets/icon/icon-arrow-next.svg';
import IconClose from '@/assets/icon/icon-close.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

import { CreateAgentFormState } from '../../_interfaces';
import * as style from './style.css';

interface Props {
  handleNext: () => void;
}
export const CreateAgentSelectPlatform = ({ handleNext }: Props) => {
  const { close } = useDialog('create-agent');

  const { setValue, watch } = useFormContext<CreateAgentFormState>();

  const platform = watch('platform');
  const valid = !!platform;
  const handleSelectPlatform = (platform: string) => {
    setValue('platform', platform);
  };

  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          Create Agent
          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>
      </div>

      <div className={style.section}>
        <div className={style.sectionLabel}>Select Platform</div>
        <div className={style.platforms}>
          <div
            className={style.platform({ selected: platform === 'eliza_os' })}
            onClick={() => handleSelectPlatform('eliza_os')}
          >
            Eliza OS
          </div>
          <div
            className={style.platform({ selected: platform === 'virtual' })}
            onClick={() => handleSelectPlatform('virtual')}
          >
            Virtual
          </div>
          <div
            className={style.platform({ selected: platform === 'crew_ai' })}
            onClick={() => handleSelectPlatform('crew_ai')}
          >
            Crew AI
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <div />
        <ButtonPrimary
          iconTrailing={
            <IconArrowNext
              width={20}
              height={20}
              fill={valid ? color.white[100] : color.black[30]}
            />
          }
          text="Next"
          disabled={!valid}
          onClick={handleNext}
        />
      </div>
    </>
  );
};
