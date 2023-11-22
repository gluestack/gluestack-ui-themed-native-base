import { Box } from '@gluestack-ui/themed';
import React from 'react';
import Wrapper from '../../Wrapper';

const BoxStory: any = ({}: any) => {
  return (
    <Wrapper>
      {/* <Box
        {...props}
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [1, 1],
            end: [0, 1],
          },
        }}
        h={h}
        w={w}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" fontWeight="$bold">
          BOX
        </Text>
      </Box> */}
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
    </Wrapper>
  );
};

export default BoxStory;
