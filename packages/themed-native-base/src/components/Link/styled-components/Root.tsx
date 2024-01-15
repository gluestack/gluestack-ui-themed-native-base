import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    _textLink: {
      textDecorationLine: 'underline',
    },
    _text: {
      textDecorationLine: 'underline',
    },
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },

    variants: {
      isUnderlined: {
        true: {
          _textLink: {
            textDecorationLine: 'underline',
          },
        },
        false: {
          _textLink: {
            textDecorationLine: 'none',
          },
        },
      },
    },
  },
  {
    componentName: 'LinkText',
    descendantStyle: ['_textLink', '_text'],
  } as const
);
