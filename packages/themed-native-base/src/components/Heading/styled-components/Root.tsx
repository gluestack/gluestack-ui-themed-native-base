import { styled } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
export default styled(
  H3,
  {
    color: '$text.900',
    _dark: {
      color: '$text.50',
    },
    fontWeight: '$bold',
    fontFamily: '$heading',
    lineHeight: '$sm',

    // Overrides expo-html default styling
    marginVertical: 0,
    variants: {
      isTruncated: {
        true: {
          props: {
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
          backgroundColor: '$yellow.500',
        },
      },
      size: {
        '4xl': {
          //@ts-ignore
          'props': { as: H1 },
          '@base': {
            fontSize: '$6xl',
          },
          '@md': {
            fontSize: '$7xl',
          },
          'letterSpacing': '$xl',
        },

        '3xl': {
          //@ts-ignore
          'props': { as: H1 },
          '@base': {
            fontSize: '$5xl',
          },
          '@md': {
            fontSize: '$6xl',
          },
          'letterSpacing': '$xl',
        },

        '2xl': {
          //@ts-ignore
          'props': { as: H2 },
          '@base': {
            fontSize: '$4xl',
          },
          '@md': {
            fontSize: '$5xl',
          },
        },

        'xl': {
          'props': { as: H3 },
          '@base': {
            fontSize: '$3xl',
          },
          '@md': {
            fontSize: '$4xl',
          },
        },

        'lg': {
          'props': { as: H4 },
          '@base': {
            fontSize: '$2xl',
          },
          '@md': {
            fontSize: '$3xl',
          },
        },

        'md': {
          //@ts-ignore
          props: { as: H5 },
          fontSize: '$xl',
        },

        'sm': {
          //@ts-ignore
          props: { as: H6 },
          fontSize: '$md',
        },

        'xs': {
          //@ts-ignore
          props: { as: H6 },
          fontSize: '$sm',
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },
  },
  {
    componentName: 'Heading',
  } as const
);
