import React from 'react';
import { Button, VStack } from '@gluestack-ui/themed-native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Button key={size} size={size}>
          BUTTON
        </Button>
      ))}
    </VStack>
  );
};
