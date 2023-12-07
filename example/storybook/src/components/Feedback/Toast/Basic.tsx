import React from 'react';
import { Button, useToast } from '@gluestack-ui/themed';

const Basic = ({ placement = 'top' }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          id: 'idTest',
          title: 'ID: idTest',
          description: 'Hello World Toast idTest',
          placement: placement,
        });
      }}
    >
      Press Me
    </Button>
  );
};

export default Basic;
