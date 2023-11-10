import { Text, Box } from '@gluestack-ui/themed';
import React from 'react';
import Wrapper from '../../Wrapper';

const BoxStory: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Wrapper>
      <Box
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
      </Box>
    </Wrapper>
  );
};

export default BoxStory;
