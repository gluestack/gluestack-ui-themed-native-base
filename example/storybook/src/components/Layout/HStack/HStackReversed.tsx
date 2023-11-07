import type { ComponentStory } from '@storybook/react-native';

import { HStack } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import React from 'react';

type MyHStackStory = ComponentStory<typeof HStack>;

const HStackReversedExample: MyHStackStory = ({ space, ...props }) => {
  return (
    <HStack space={space} mt="$5" {...props} reversed>
      <Box w={100} h={100} bg="blue.300" />
      <Box w={100} h={100} bg="blue.400" />
      <Box w={100} h={100} bg="blue.500" />
      <Box w={100} h={100} bg="blue.600" />
    </HStack>
  );
};

export default HStackReversedExample;
