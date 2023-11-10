import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export const Backdrop = styled(
  Pressable,
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // use this for when you want to give background colour to backdrop
    // opacity: 0.5,
    // backgroundColor: '$backgroundLight500',
    _web: {
      cursor: 'default',
    },
  },
  {}
);
