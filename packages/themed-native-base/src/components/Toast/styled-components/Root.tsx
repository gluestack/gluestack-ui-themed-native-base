import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    padding: '$2',
    rounded: '$sm',
    backgroundColor: `$muted.700`,
    _dark: {
      backgroundColor: `$muted.600`,
    },

    _web: {
      props: {
        pointerEvents: 'auto',
      },
    },
  },
  {
    componentName: 'Toast',
    descendantStyle: ['_icon', '_title', '_description'],
  } as const
);
