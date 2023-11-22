import React from 'react';
import { CheckIcon, HStack, Text } from '@gluestack-ui/themed-native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <CheckIcon size="5" mt="0.5" color="emerald.500" />
      <Text color="emerald.500" fontSize="md">
        Order Placed Successfully
      </Text>
    </HStack>
  );
};
