import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    ':focusVisible': {
      _web: {
        outlineWidth: 0,
        boxShadow: `$cyan.400 0px 0px 0px 2px`,
      },
    },
    '_dark': {
      ':focusVisible': {
        _web: {
          outlineWidth: 0,
          boxShadow: `$cyan.500 0px 0px 0px 2px`,
        },
      },
    },
  },
  {
    componentName: 'Pressable',
  } as const
);
