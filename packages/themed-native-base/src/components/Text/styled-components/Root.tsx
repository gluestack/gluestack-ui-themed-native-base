import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.900',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    _dark: {
      color: '$text.50',
    },

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
          lineHeight: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow.500',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
          lineHeight: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
          lineHeight: '$sm',
        },

        'sm': {
          fontSize: '$sm',
          lineHeight: '$sm',
        },

        'md': {
          fontSize: '$md',
          lineHeight: '$md',
        },

        'lg': {
          fontSize: '$lg',
          lineHeight: '$xl',
        },

        'xl': {
          fontSize: '$xl',
          lineHeight: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
          lineHeight: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
          lineHeight: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
          lineHeight: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
          lineHeight: '$6xl',
        },

        '6xl': {
          fontSize: '$6xl',
          lineHeight: '$7xl',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  { ancestorStyle: ['_text'] }
);
