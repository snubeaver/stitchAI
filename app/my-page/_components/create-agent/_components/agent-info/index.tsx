import { useFormContext } from 'react-hook-form';

import { useGetMemoryFromStorage } from '@/api/get-memory-from-storage';
import { useGetUser } from '@/api/get-user';
import { usePostCreateAgent } from '@/api/post-create-agent';
import { color } from '@/assets/color';
import IconArrowBack from '@/assets/icon/icon-arrow-back.svg';
import IconClose from '@/assets/icon/icon-close.svg';
import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

import { CreateAgentFormState } from '../../_interfaces';
import * as style from './style.css';

interface Props {
  handleBack: () => void;
}
export const CreateAgentAgentInfo = ({ handleBack }: Props) => {
  const { data: user } = useGetUser();

  const { close } = useDialog('create-agent');

  const { register, getValues, watch } = useFormContext<CreateAgentFormState>();

  const name = watch('name');
  const description = watch('description');
  const socialLink = watch('socialLink');

  const selectedMemory = watch('memory');
  const selectedMemoryDetail = user?.memory.find(i => i.id === selectedMemory);

  const { data: memory } = useGetMemoryFromStorage(selectedMemoryDetail?.dataUrl || '');
  const { mutateAsync: createAgent } = usePostCreateAgent();

  const valid = !!name && !!description && !!socialLink;

  const handleCreate = async () => {
    const values = getValues();
    await createAgent({
      data: memory,
      walletAddress: user?.walletAddress || '',
      agentName: values.name,
      description: values.description,
      socialLink: values.socialLink,
    });
    close();
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
        <div className={style.sectionLabel}>Name</div>
        <input className={style.input} type="text" {...register('name')} />
      </div>
      <div className={style.section}>
        <div className={style.sectionLabel}>Description</div>
        <textarea className={style.textarea} {...register('description')} />
      </div>
      <div className={style.section}>
        <div className={style.sectionLabel}>Social Link</div>
        <input className={style.input} type="text" {...register('socialLink')} />
      </div>

      <div className={style.footer}>
        <ButtonPrimary
          iconLeading={<IconArrowBack width={20} height={20} fill={color.black[100]} />}
          text="Back"
          state="normal"
          onClick={handleBack}
        />
        <ButtonPrimary
          iconLeading={
            <IconPlus width={20} height={20} fill={valid ? color.white[100] : color.black[30]} />
          }
          disabled={!valid}
          text="Create"
          onClick={handleCreate}
        />
      </div>
    </>
  );
};
