import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';

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
