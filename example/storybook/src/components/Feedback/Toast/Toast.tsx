import React from 'react';
import { Button, useToast } from '@gluestack-ui/themed';

const ToastStory = ({ placement = 'top' }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          title: 'Hello World Toast',
          description: 'Please create a support ticket from the support page',
          placement: placement,
          duration: null,
        });
      }}
    >
      Press Me
    </Button>
  );
};

export default ToastStory;
