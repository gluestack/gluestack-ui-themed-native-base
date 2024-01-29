import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_labelAstrick'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
