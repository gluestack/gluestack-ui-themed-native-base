import React from 'react';
import { Stack, Box } from '@gluestack-ui/themed';

const StackStory = ({ space, reversed, direction }: any) => {
  const flexDirection = `${direction}` + (reversed ? '-reverse' : '');

  return (
    <Stack
      space={space}
      mt="5"
      //@ts-ignore
      direction={flexDirection}
    >
      <Box w={100} h={100} bg="success.500" />
      <Box w={100} h={100} bg="blue.400" />
      <Box w={100} h={100} bg="blue.100" />
      <Box w={100} h={100} bg="blue.800" />
    </Stack>
  );
};

export default StackStory;
