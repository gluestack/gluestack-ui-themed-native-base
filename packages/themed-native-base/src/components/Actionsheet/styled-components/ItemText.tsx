import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { TextStyleResolver } from '../../../plugins';

export default styled(
  Text,
  {
    mx: '$2',
    // @ts-ignore
    fontSize: '$md',
    fontFamily: '$body',
    fontWeight: '$normal',
    // @ts-ignore
    lineHeight: '$md',
    color: '$textLight.800',
    _dark: {
      color: '$textDark.100',
    },
    fontStyle: 'normal',
    letterSpacing: '$md',
  },
  {
    componentName: 'ActionsheetItemText',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
