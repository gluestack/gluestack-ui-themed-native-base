import React from 'react';
import { Button } from '@gluestack-ui/themed-native-base';

export const Example = () => {
  return (
    <Button.Group
      isAttached
      mx={{ base: 'auto', md: 0 }}
      size="sm"
    >
      <Button colorScheme="blue">Edit</Button>
      <Button variant="outline">Save</Button>
    </Button.Group>
  );
};
