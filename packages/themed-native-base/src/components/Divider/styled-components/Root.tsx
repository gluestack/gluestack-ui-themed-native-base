import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    backgroundColor: '$muted.300',
    _dark: {
      backgroundColor: '$muted.600',
    },
    variants: {
      orientation: {
        vertical: {
          width: 1,
          height: '100%',
        },
        horizontal: {
          height: 1,
          width: '100%',
        },
      },
    },
    defaultProps: {
      orientation: 'horizontal',
    },
  },
  {
    componentName: 'Divider',
  } as const
);
