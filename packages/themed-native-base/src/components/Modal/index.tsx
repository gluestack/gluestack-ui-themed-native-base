import React, { forwardRef } from 'react';
import { createModal } from '@gluestack-ui/modal';
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from './styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { CloseIcon } from '../Icons';
import { GenericComponentType } from '../../types';
import { AnimatePresence } from '@gluestack-style/animation-resolver';

const AccessibleModal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

const ModalNew = forwardRef(
  (
    { children, overlayVisible = true, backdropVisible = true, ...props }: any,
    ref?: any
  ) => {
    return (
      <AccessibleModal {...props} ref={ref}>
        {overlayVisible && backdropVisible && <AccessibleModal.Backdrop />}
        {children}
      </AccessibleModal>
    );
  }
) as any;

const AccessibleModalCloseButton = forwardRef(
  ({ ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.CloseButton {...props} ref={ref}>
        <CloseIcon />
      </AccessibleModal.CloseButton>
    );
  }
);

const AccessibleModalHeader = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Header {...props} ref={ref}>
        {typeof children === 'string' ? (
          <Heading>{children}</Heading>
        ) : (
          children
        )}
      </AccessibleModal.Header>
    );
  }
);

const AccessibleModalFooter = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Footer {...props} ref={ref}>
        {children}
      </AccessibleModal.Footer>
    );
  }
);

const AccessibleModalBody = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleModal.Body {...props} ref={ref}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </AccessibleModal.Body>
    );
  }
);

ModalNew.Content = AccessibleModal.Content as any;
ModalNew.CloseButton = AccessibleModalCloseButton as any;
ModalNew.Header = AccessibleModalHeader as any;
ModalNew.Footer = AccessibleModalFooter as any;
ModalNew.Body = AccessibleModalBody as any;

export type IModalComponentType<
  Modal,
  Content,
  CloseButton,
  Header,
  Footer,
  Body
> = GenericComponentType<Modal> & {
  Content: GenericComponentType<Content>;
  CloseButton: GenericComponentType<CloseButton>;
  Header: GenericComponentType<Header>;
  Footer: GenericComponentType<Footer>;
  Body: GenericComponentType<Body>;
};

export const Modal = ModalNew as IModalComponentType<
  typeof AccessibleModal,
  typeof AccessibleModal.Content,
  typeof AccessibleModal.CloseButton,
  typeof AccessibleModal.Header,
  typeof AccessibleModal.Footer,
  typeof AccessibleModal.Body
>;
