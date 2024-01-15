import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    variants: {
      centerContent: { true: { alignItems: 'center' } },
    },
  },
  {
    componentName: 'Container',
    descendantStyle: ['_text'],
  } as const
);
