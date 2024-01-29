import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { TextStyleResolver } from '../../../plugins';

export default styled(
  Text,
  {},
  {
    componentName: 'RadioLabel',
    ancestorStyle: ['_text'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
