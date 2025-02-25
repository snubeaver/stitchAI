import { produce } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from './_logger';

interface Props {
  id?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;

  openCallback?: (id?: string) => void;
  closeCallback?: (id?: string) => void;
}
interface State {
  opened: string[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>;

  openCallback: Record<string, (id?: string) => void>;
  closeCallback: Record<string, (id?: string) => void>;

  open: (props: Props) => void;
  close: (props: Props) => void;

  reset: () => void;
}

export const useDialogState = create<State>()(
  logger(
    immer(set => ({
      name: 'dialog',

      opened: [] as string[],
      params: {},

      openCallback: {},
      closeCallback: {},

      open: ({ id, params, openCallback, closeCallback }) =>
        set(
          produce<State>(state => {
            if (id && !state.opened.includes(id)) {
              state.opened.push(id);

              if (params) state.params[id] = params;
              if (openCallback) state.openCallback[id] = openCallback;
              if (closeCallback) state.closeCallback[id] = closeCallback;
            }
          })
        ),

      close: ({ id }) =>
        set(
          produce<State>(state => {
            if (id) {
              const idx = state.opened.findIndex(i => i === id);
              if (idx >= 0) {
                state.opened.splice(idx, 1);
                state.params[id] = undefined;
                state.openCallback[id] = () => {};
                state.closeCallback[id] = () => {};
              }
            }
          })
        ),

      reset: () => set({ opened: [], openCallback: {}, closeCallback: {}, params: {} }),
    }))
  )
);
