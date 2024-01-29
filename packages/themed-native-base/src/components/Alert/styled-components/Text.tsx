import { TextStyleResolver } from '../../../plugins';
import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    flex: 1,
    color: '$text.900',
    _dark: {
      color: '$text.50',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',
    fontSize: '$sm',
    lineHeight: '$lg',
  },
  {
    componentName: 'AlertText',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
