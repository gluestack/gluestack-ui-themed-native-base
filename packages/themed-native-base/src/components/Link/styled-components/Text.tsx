import { Root as Text } from '../../Text/styled-components';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.900',
    _dark: {
      color: '$text.50',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    // @ts-ignore
    letterSpacing: '$md',
    // @ts-ignore
    fontSize: '$sm',
    // @ts-ignore
    lineHeight: '$lg',

    variants: {
      IsUnderline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'LinkText',
    ancestorStyle: ['_textLink'],
  } as const
);
