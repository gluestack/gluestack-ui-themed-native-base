import { TextStyleResolver } from '../../../plugins';
import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.900',
    _dark: {
      color: '$text.50',
    },
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',
    fontSize: '$xs',
    fontWeight: '$medium',
    lineHeight: '$lg',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
