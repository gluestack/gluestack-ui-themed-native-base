import React from 'react';
import { VStack, Box } from 'native-base';

export function Example() {
  return (
    <VStack
      w="60%"
      rounded="md"
      _light={{
        bg: 'violet.400',
      }}
      _dark={{
        bg: 'violet.800',
      }}
      p={4}
      justifyContent="center"
    >
      <Box
        _light={{
          bg: 'gray.600',
        }}
        _dark={{
          bg: 'gray.100',
        }}
        h="7px"
        rounded="25"
        w="100%"
      />

      <Box
        _light={{
          bg: 'violet.400',
        }}
        _dark={{
          bg: 'violet.800',
        }}
        size={4}
        right={5}
        bottom={-8}
        position="absolute"
        style={{
          transform: [{ rotate: '45deg' }],
        }}
      />
    </VStack>
  );
}
