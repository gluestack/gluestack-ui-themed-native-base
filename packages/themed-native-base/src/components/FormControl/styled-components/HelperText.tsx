import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    // @ts-ignore
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$text.500',
    _dark: {
      color: '$text.400',
    },
  },
  {
    componentName: 'FormControlHelperText',
    ancestorStyle: ['_helperText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
