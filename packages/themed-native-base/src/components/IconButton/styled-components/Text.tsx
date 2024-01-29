import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontFamily: '$body',
    userSelect: 'none',
    //@ts-ignore
    // @ts-ignore
    lineHeight: '1.5em',
  },
  {
    componentName: 'IconButtonText',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
