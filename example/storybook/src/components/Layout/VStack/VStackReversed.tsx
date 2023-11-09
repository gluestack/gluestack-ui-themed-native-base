import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Box } from '@gluestack-ui/themed';

import { VStack } from '@gluestack-ui/themed';

type MyVStackStory = ComponentStory<typeof VStack>;

const VStackReversedExample: MyVStackStory = ({ space, ...props }) => {
  return (
    <VStack space={space} mt="$5" {...props} reversed>
      <Box w={100} h={100} rounded="$sm" bg="blue.300" />
      <Box w={100} h={100} rounded="$sm" bg="blue.400" />
      <Box w={100} h={100} rounded="$sm" bg="blue.500" />
      <Box w={100} h={100} rounded="$sm" bg="blue.600" />
    </VStack>
  );
};

export default VStackReversedExample;
