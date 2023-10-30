import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    ':invalid': {
      borderColor: '$error.500',
    },
    'borderWidth': 2,
    'borderRadius': '$full',
    'p': '$1',
    'bg': '$muted.50',
    'borderColor': '$muted.400',
    'my': '$1',
  },
  {
    componentName: 'RadioIndicator',
    ancestorStyle: ['_indicator'],
    descendantStyle: ['_icon'],
  } as const
);
