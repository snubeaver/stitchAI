import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import { ButtonPrimary } from '@/components/button/primary';
import * as baseStyle from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

import * as style from './style.css';

interface FormState {
  platform: string;
  memory: File[];
}
export const ImportMemory = () => {
  const { close } = useDialog('import-memory');
  const { setValue, watch } = useForm<FormState>();

  const files = watch('memory') || [];
  const platform = watch('platform');

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setValue('memory', newFiles);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setValue('memory', [...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
  });

  const valid = files.length > 0 && !!platform;

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
            onClick={() => setValue('platform', 'eliza_os')}
          >
            Eliza OS
          </div>
          <div
            className={style.platform({ selected: platform === 'virtual' })}
            onClick={() => setValue('platform', 'virtual')}
          >
            Virtual
          </div>
          <div
            className={style.platform({ selected: platform === 'crew_ai' })}
            onClick={() => setValue('platform', 'crew_ai')}
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
          {files.map((file, i) => (
            <div key={`${file.name}-${i}`} className={style.fileItem}>
              <div>{file.name}</div>
              <IconClose
                width={20}
                height={20}
                fill={color.black[30]}
                onClick={() => handleRemoveFile(i)}
                className={style.remove}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={style.footer}>
        <ButtonPrimary text="Import" disabled={!valid} />
      </div>
    </>
  );
};
