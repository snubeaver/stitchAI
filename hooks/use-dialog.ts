import { useCallback, useMemo } from 'react';

import { useDialogState } from '@/states/dialog';

interface Props {
  id?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;

  openCallback?: (id?: string) => void;
  closeCallback?: (id?: string) => void;
}
export const useDialog = (id?: string) => {
  const {
    open: _open,
    close: _close,

    opened: _opened,

    params: _params,

    openCallback: _openCallback,
    closeCallback: _closeCallback,

    reset,
  } = useDialogState();

  const openedAny = useMemo(() => !!_opened?.length || false, [_opened?.length]);
  const opened = useMemo(
    () => (id ? !!_opened.find(i => i === id) || false : false),
    [_opened, id]
  );
  const params = useMemo(() => (id ? _params?.[id] || undefined : undefined), [_params, id]);
  const openCallback = useMemo(
    () => (id ? _openCallback?.[id] || undefined : undefined),
    [_openCallback, id]
  );
  const closeCallback = useMemo(
    () => (id ? _closeCallback?.[id] || undefined : undefined),
    [_closeCallback, id]
  );

  const open = useCallback(
    (props?: Props) => {
      const { params, openCallback, closeCallback } = props || {};
      _open({ id, params, openCallback, closeCallback });
    },
    [_open, id]
  );

  const close = useCallback(() => {
    _close({ id });
  }, [_close, id]);

  const toggle = useCallback(
    (open: boolean) => {
      if (open) _open({ id });
      else _close({ id });
    },
    [_close, _open, id]
  );

  return {
    openedAny,
    opened,
    params,

    openCallback,
    closeCallback,

    open,
    close,
    toggle,

    reset,
  };
};
