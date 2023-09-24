import React from 'react';
import { Button, useToast } from '@gluestack-ui/themed';

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
            title: 'ID:' + idTest,
            description: 'You can not clone me till I die',
            placement: placement,
          });
        }
      }}
    >
      Press Me
    </Button>
  );
};

export default DuplicateToastPrevent;
