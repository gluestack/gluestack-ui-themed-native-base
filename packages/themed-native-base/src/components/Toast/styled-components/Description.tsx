import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { TextStyleResolver } from '../../../plugins';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    // @ts-ignore
    fontSize: '$sm',
  },
  {
    componentName: 'ToastDescription',
    ancestorStyle: ['_description'],
  } as const,
  {
    plugins: [new TextStyleResolver()],
  }
);
