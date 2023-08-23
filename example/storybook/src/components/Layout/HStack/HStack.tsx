import React from 'react';
import { HStack, Box } from '@gluestack-ui/themed';

const HStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" reversed={reversed} {...props}>
      <Box w={100} h={100} bg="success.500" />
      <Box w={100} h={100} bg="blue.400" />
      <Box w={100} h={100} bg="blue.100" />
      <Box w={100} h={100} bg="blue.800" />
    </HStack>
  );
};

export default HStackStory;

export { Box, HStack };
