import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    padding: '$3',
  },
  {
    componentName: 'PopoverBody',
  } as const
);
