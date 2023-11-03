import React from 'react';

import { VStack, Box, Divider } from '@gluestack-ui/themed';

const VStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <VStack
      space={space}
      //@ts-ignore
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      reversed={reversed}
      {...props}
      divider={<Divider h="10" />}
    >
      <Box w={100} h={100} bg="success.500" />
      <Box w={100} h={100} bg="blue.400" />
      <Box w={100} h={100} bg="blue.100" />
      <Box w={100} h={100} bg="blue.800" />
    </VStack>
  );
};

export default VStackStory;

export { Box, VStack };
