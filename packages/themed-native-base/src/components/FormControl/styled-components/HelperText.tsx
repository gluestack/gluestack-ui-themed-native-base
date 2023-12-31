import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

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
  } as const
);
