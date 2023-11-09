import React from 'react';

import { ZStack, Box, Center } from '@gluestack-ui/themed';

const ZStackStory = () => {
  return (
    <Center h="96">
      <ZStack reversed={true}>
        <Box bg="red.700" h={400} w={400} rounded="lg" />
        <Box bg="yellow.500" h={200} w={200} rounded="lg" shadow={8} />
        <Box bg="green.300" h={50} w={50} rounded="lg" shadow={8} />
      </ZStack>
    </Center>
  );
};

export default ZStackStory;
