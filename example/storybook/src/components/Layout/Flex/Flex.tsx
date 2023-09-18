import { Text, Flex } from '@gluestack-ui/themed';
import React from 'react';

const FlexStory: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Flex {...props} bg={`${bg}`} h={h} w={w} justify="center" align="center">
      <Text color="white" fontWeight="$bold">
        Flex
      </Text>
    </Flex>
  );
};

export default FlexStory;
