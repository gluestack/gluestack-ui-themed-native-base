import { Box } from '@gluestack-ui/themed';
import React from 'react';

const BoxStory: any = ({}: any) => {
  return (
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
  );
};

export default BoxStory;
