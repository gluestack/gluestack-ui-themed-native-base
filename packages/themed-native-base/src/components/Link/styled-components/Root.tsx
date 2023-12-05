import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    _textLink: {
      textDecorationLine: 'underline',
    },
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    componentName: 'LinkText',
    descendantStyle: ['_textLink'],
  } as const
);
