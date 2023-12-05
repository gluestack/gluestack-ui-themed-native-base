import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mt: '$1',
    gap: '$1',
    _icon: {
      textAlign: 'center',
      justifyContent: 'center',
      color: '$error.600',
      _dark: {
        color: '$error.500',
      },
      height: '$4',
      width: '$4',
    },
  },
  {
    componentName: 'FormControlError',
    descendantStyle: ['_icon'],
  } as const
);
