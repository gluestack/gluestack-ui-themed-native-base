import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    // @ts-ignore
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$body',
    color: '$muted.900',
    _dark: {
      color: '$muted.50',
    },
  },
  {
    componentName: 'FormControlLabelText',
    ancestorStyle: ['_labelText'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
