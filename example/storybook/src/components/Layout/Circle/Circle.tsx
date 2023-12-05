import { Circle } from '@gluestack-ui/themed';
import React from 'react';

const CircleStory: any = ({}: any) => {
  return (
    <Circle
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
      This is a Circle with Linear Gradient
    </Circle>
  );
};

export default CircleStory;
