import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';

import { useGetRunningInstanceMemory } from '@/api/get-running-instance-memory';
import { useGetRunningInstances } from '@/api/get-running-instances';
import { usePostImportMemory } from '@/api/post-import-memory';
import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { MemoryPlatform, MemoryType } from '@/entities/market-memory';
import { useDialog } from '@/hooks/use-dialog';

import * as style from './style.css';

interface FormState {
  platform: string;
  title: string;
  description: string;

  file: File | null;
}
export const ImportMemory = () => {
  const { address } = useAccount();

  const { data: runningInstances } = useGetRunningInstances();
  const { mutateAsync: downloadRunningInstanceMemory } = useGetRunningInstanceMemory();

  const { close } = useDialog('import-memory');
  const { register, setValue, getValues, watch } = useForm<FormState>();

  const file = watch('file');
  const platform = watch('platform');
  const title = watch('title');

  const handleRemoveFile = () => {
    setValue('file', null);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setValue('file', acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
  });

  const valid = !!file && !!platform && !!title;

  const { mutateAsync: importMemory, isPending } = usePostImportMemory();

  const handleImportMemory = async () => {
    if (!valid) return;
    const { file, platform, title, description } = getValues();

    await importMemory({
      file: file as File,
      userWalletAddress: address as string,
      type: 'AGENT' as MemoryType,
      platform: platform as MemoryPlatform,
      title,
      description,
      price: 0,
    });
    close();
  };

  const handleDownloadRunningInstanceMemory = async (instanceName: string) => {
    const res = await downloadRunningInstanceMemory(instanceName);

    const targetData = res.toString();
    const blob = new Blob([targetData], { type: 'text/plain' });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${instanceName}-memories-${new Date().toISOString()}.csv`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className={style.header}>
        <div className={baseStyle.title}>
          Import Memory
          <div className={baseStyle.closeButton} onClick={close}>
            <IconClose width={24} height={24} fill={color.black[30]} />
          </div>
        </div>
      </div>

      <div className={style.section}>
        <div className={style.sectionLabel}>Title</div>
        <input className={style.input} type="text" {...register('title')} />
      </div>

      <div className={style.section}>
        <div className={style.sectionLabel}>Description</div>
        <textarea className={style.textarea} {...register('description')} />
      </div>

      <div className={style.section}>
        <div className={style.sectionLabel}>Select Platform</div>
        <div className={style.platforms}>
          <div
            className={style.platform({ selected: platform === 'ELIZA_OS' })}
            onClick={() => setValue('platform', 'ELIZA_OS')}
          >
            Eliza OS
          </div>
          <div
            className={style.platform({ selected: platform === 'VIRTUALS' })}
            onClick={() => setValue('platform', 'VIRTUALS')}
          >
            Virtual
          </div>
          <div
            className={style.platform({ selected: platform === 'CREW_AI' })}
            onClick={() => setValue('platform', 'CREW_AI')}
          >
            Crew AI
          </div>
        </div>
      </div>

      <div className={style.section}>
        <div className={style.sectionLabel}>Upload Your File</div>
        <div {...getRootProps()} className={style.dropzone({ isDragAccept })}>
          <input {...getInputProps()} />

          {isDragAccept ? (
            <div className={style.dropzoneTextWrapper}>
              <div className={style.dropzoneText1}>Drag Here!</div>
            </div>
          ) : (
            <div className={style.dropzoneTextWrapper}>
              <div className={style.dropzoneText1}>Drag & Drop your file here</div>
              <div className={style.dropzoneText2}>
                {'or '}
                <span className={style.underline} onClick={() => {}}>
                  browse files
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={style.fileList}>
          {file && (
            <div key={`${file.name}`} className={style.fileItem}>
              <div>{file.name}</div>
              <IconClose
                width={20}
                height={20}
                fill={color.black[30]}
                onClick={handleRemoveFile}
                className={style.remove}
              />
            </div>
          )}
        </div>

        <div className={style.section}>
          <div className={style.sectionLabel2}>or Download running agent memory(optional)</div>
          <div className={style.memoryList}>
            {runningInstances?.deployments.map(instance => (
              instance.instanceName.startsWith('eliza-') ? (
                <div
                  key={instance.jobId}
                  className={style.memoryItem}
                  onClick={() => handleDownloadRunningInstanceMemory(instance.instanceName)}
                >
                  {instance.instanceName}
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <ButtonPrimary text="Import" disabled={!valid || isPending} onClick={handleImportMemory} />
      </div>
    </>
  );
};
