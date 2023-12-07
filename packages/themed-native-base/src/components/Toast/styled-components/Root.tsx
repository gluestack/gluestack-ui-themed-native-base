import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
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
