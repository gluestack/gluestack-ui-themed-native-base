import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';

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
