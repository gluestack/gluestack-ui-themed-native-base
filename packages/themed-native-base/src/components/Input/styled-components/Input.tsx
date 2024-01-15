import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    backgroundColor: 'transparent',
    flex: 1,
    width: '$full',
    height: '$full',
    // @ts-ignore
    py: '$2',
    // @ts-ignore
    px: '$3',
    color: '$text.900',
    props: {
      placeholderTextColor: '$text.400',
    },
    _dark: {
      color: '$text.50',
      props: {
        placeholderTextColor: '$text.600',
      },
    },
  },
  {
    componentName: 'InputField',
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  } as const,
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
