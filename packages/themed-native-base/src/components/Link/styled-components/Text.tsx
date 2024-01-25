import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.900',
    _dark: {
      color: '$text.50',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    // @ts-ignore
    letterSpacing: '$md',
    // @ts-ignore
    fontSize: '$sm',
    // @ts-ignore
    lineHeight: '$lg',

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'LinkText',
    ancestorStyle: ['_linkText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
