import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },

    variants: {
      isUnderlined: {
        true: {
          _linkText: {
            textDecorationLine: 'underline',
          },
        },
        false: {
          _linkText: {
            textDecorationLine: 'none',
          },
        },
      },
    },
    defaultProps: {
      isUnderlined: 'true',
    },
  },
  {
    componentName: 'Link',
    descendantStyle: ['_linkText', '_text'],
  } as const
);
