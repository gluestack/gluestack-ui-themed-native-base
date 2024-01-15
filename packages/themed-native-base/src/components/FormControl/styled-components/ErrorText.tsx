import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';

export default styled(
  Text,
  {
    // @ts-ignore
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_errorText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
