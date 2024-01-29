import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  {
    componentName: 'FabLabel',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
