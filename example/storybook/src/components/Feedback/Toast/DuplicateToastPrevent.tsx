import React from 'react';
import {
  Button,
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';

const DuplicateToastPrevent = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  const idTest = 'test-id';
  return (
    <Button
      {...props}
      onPress={() => {
        if (!toast.isActive(idTest)) {
          toast.show({
            id: idTest,
            placement: placement,
            // title: 'ID' + idTest,
            // description: 'Hello World Toast.',
            render: ({ id }) => {
              return (
                <Toast nativeID={id}>
                  <ToastTitle>ID: {id}</ToastTitle>
                  <ToastDescription>
                    You can not clone me till I die
                  </ToastDescription>
                </Toast>
              );
            },
          });
        }
      }}
    >
      Press Me
    </Button>
  );
};

export default DuplicateToastPrevent;
