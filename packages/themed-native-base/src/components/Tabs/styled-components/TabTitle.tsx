import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  { ancestorStyle: ['_title'] },
  {
    plugins: [new TextStyleResolver()],
  }
);
