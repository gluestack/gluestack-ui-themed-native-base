import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { TextStyleResolver } from '../../../plugins';

export default styled(
  Text,
  {
    color: '$textLight500',
    // @ts-ignore
    fontSize: '$sm',
    fontFamily: '$body',
    fontWeight: '$bold',
    // @ts-ignore
    lineHeight: '$xs',
    textTransform: 'uppercase',
    padding: '$3',
    _dark: {
      color: '$textDark.400',
    },
  },
  {
    componentName: 'ActionsheetSectionHeaderText',
    ancestorStyle: ['_sectionHeaderText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
