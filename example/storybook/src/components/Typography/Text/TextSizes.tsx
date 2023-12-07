import React from 'react';

import { Center, Text } from '@gluestack-ui/themed';

const SizeTextStory = () => {
  const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ];
  return (
    <Center>
      {sizes.map((size: any) => (
        <Text fontSize={size} key={size}>
          {size}
        </Text>
      ))}
    </Center>
  );
};

export default SizeTextStory;
