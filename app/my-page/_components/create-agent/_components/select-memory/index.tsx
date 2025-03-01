import { useFormContext } from 'react-hook-form';

import { useGetUser } from '@/api/get-user';
import { color } from '@/assets/color';
import IconArrowBack from '@/assets/icon/icon-arrow-back.svg';
import IconArrowNext from '@/assets/icon/icon-arrow-next.svg';
import IconClose from '@/assets/icon/icon-close.svg';
import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

import { CreateAgentFormState } from '../../_interfaces';
import * as style from './style.css';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}
export const CreateAgentSelectMemory = ({ handleBack, handleNext }: Props) => {
  const { close } = useDialog('create-agent');

  const { data: user } = useGetUser();

  const { setValue, watch } = useFormContext<CreateAgentFormState>();

  const selectedMemory = watch('memory');
  const valid = !!selectedMemory;
  const handleSelectMemory = (memory: string) => {
    setValue('memory', memory);
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
        <div className={style.sectionLabel}>Select Memory</div>
        <div className={style.memories}>
          {user?.memory.map(memory => (
            <div
              key={memory.id}
              className={style.memory({ selected: memory.id === selectedMemory })}
              onClick={() => handleSelectMemory(memory.id)}
            >
              {memory.title}
            </div>
          ))}

          <div className={style.memoryCreateButton}>
            <IconPlus width={16} height={16} fill={color.blue[100]} />
            Create Memory
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <ButtonPrimary
          iconLeading={<IconArrowBack width={20} height={20} fill={color.black[100]} />}
          text="Back"
          state="normal"
          onClick={handleBack}
        />
        <ButtonPrimary
          iconTrailing={
            <IconArrowNext
              width={20}
              height={20}
              fill={valid ? color.white[100] : color.black[30]}
            />
          }
          disabled={!valid}
          text="Next"
          onClick={handleNext}
        />
      </div>
    </>
  );
};
