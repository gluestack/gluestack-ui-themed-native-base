import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
import { TextStyleResolver } from '../../../plugins';

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
