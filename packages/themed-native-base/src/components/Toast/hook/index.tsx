import { createToastHook } from '@gluestack-ui/toast';
import { Root } from '../../Box/styled-components';
import React from 'react';
import { Toast } from '..';
import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { AnimationWrapper } from '../styled-components';

export function useToast() {
  type IShowParams = Parameters<typeof toast.show>[0] & {
    title?: string;
    description?: string;
  };

  type ISXProps = React.ComponentProps<typeof Root>['sx'];

  const toast = createToastHook(AnimationWrapper, AnimatePresence)();

  const close = toast.close;
  const closeAll = toast.closeAll;
  const isActive = toast.isActive;
  const show = ({
    title,
    description,
    duration,
    id: IDbyUser,
    onCloseComplete,
    placement,
    render,
    ...props
  }: IShowParams &
    ISXProps & { _title?: ISXProps; _description?: ISXProps }) => {
    if (render)
      toast.show({
        containerStyle: { ...props },
        duration,
        id: IDbyUser,
        onCloseComplete,
        placement,
        render,
      });
    else {
      const ToastComp = ({ id }: any) => {
        return (
          <Toast sx={props} nativeID={id}>
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </Toast>
        );
      };
      toast.show({
        duration,
        containerStyle: { ...props },
        id: IDbyUser,
        onCloseComplete,
        placement,
        render: ToastComp,
      });
    }
  };

  return { close: close, closeAll: closeAll, isActive: isActive, show: show };
}
