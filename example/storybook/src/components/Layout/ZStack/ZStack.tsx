import React from 'react';

import { ZStack, Box } from '@gluestack-ui/themed';

const ZStackStory = () => {
  return (
    <ZStack>
      <Box w={100} h={100} bg="success.400" ml="20px" mt="20px" rounded="lg" />
      <Box w={100} h={100} bg="blue.400" ml="40px" mt="40px" rounded="lg" />
      <Box w={100} h={100} bg="yellow.400" ml="60px" mt="60px" rounded="lg" />
      <Box w={100} h={100} bg="red.400" ml="80px" mt="80px" rounded="lg" />
    </ZStack>
  );
};

export default ZStackStory;
