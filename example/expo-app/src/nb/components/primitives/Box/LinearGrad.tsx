import React from 'react';
import { Box, LinearGradient, Text } from '@gluestack-ui/themed-native-base';
export const Example = () => {
  return (
    <>
    <LinearGradient
      colors={['lightBlue.300', 'violet.800']}
      start={{x:0, y:0}}
      end={{x:1, y:0}}
      p="12"
      w="72"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'yellow.500',
        textAlign: 'center',
      }}
    >
      This is a box with Linear Gradient
    </LinearGradient>
    
    {/*
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      w="72"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  */}
  </>
  );
};
