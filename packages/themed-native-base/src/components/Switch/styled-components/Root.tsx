import { styled } from '@gluestack-style/react';
import { Switch } from 'react-native';
import { ColorSchemeResolver } from '../../../plugins';

export default styled(
  Switch,
  {
    'borderRadius': '$full',
    ':disabled': {
      opacity: 0.4,
    },
    ':invalid': {
      _web: {
        boxShadow: `0 0 0 2px $error.600`,
      },
      _android: {
        borderColor: '$error.600',
        borderWidth: 2,
        borderRadius: 12,
      },
    },
    'props': {
      thumbColor: '$muted.50',
      activeThumbColor: '$muted.50',
      trackColor: { false: '$muted.300', true: '$primary.600' },
      // for ios specifically in unchecked state
      ios_backgroundColor: '$muted.300',
    },
    ':hover': {
      props: {
        trackColor: { false: '$muted.400', true: '$primary.700' },
        // for ios specifically in unchecked state
        ios_backgroundColor: '$muted.400',
      },
    },

    '_dark': {
      'props': {
        trackColor: { false: '$muted.700', true: '$primary.500' },
        // for ios specifically in unchecked state
        ios_backgroundColor: '$muted.700',
      },
      ':hover': {
        props: {
          trackColor: { false: '$muted.600', true: '$primary.400' },
          // for ios specifically in unchecked state
          ios_backgroundColor: '$muted.600',
        },
      },
      ':invalid': {
        _web: {
          boxShadow: `0 0 0 2px $error.500`,
        },
        _android: {
          borderColor: '$error.500',
          // @ts-ignore
          borderWidth: 2,
          // @ts-ignore
          borderRadius: 12,
        },
      },
    },

    '_web': {
      // @ts-ignore
      'borderWidth': 0,
      'outlineWidth': 10,
      'outlineColor': '$yellow.400',
      '_dark': {
        outlineWidth: 0,
      },
      ':focus': {
        outlineWidth: 0,
        outlineColor: '$yellow.400',
        _dark: {
          outlineWidth: 0,
        },
      },
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },

    'variants': {
      colorScheme: {},
      size: {
        sm: {
          transform: [
            {
              scale: 0.75,
            },
          ],
        },
        md: {},
        lg: {
          transform: [
            {
              scale: 1.25,
            },
          ],
          margin: 1,
        },
      },
    },

    'defaultProps': {
      size: 'md',
      // @ts-ignore
      colorScheme: 'primary',
    },
  },
  {
    componentName: 'Switch',
    resolveProps: [
      'thumbColor',
      'trackColor',
      'activeThumbColor',
      'ios_backgroundColor',
    ],
  } as const,
  {
    propertyTokenMap: {
      trackColor: 'colors',
      thumbColor: 'colors',
      activeThumbColor: 'colors',
      ios_backgroundColor: 'colors',
    },
    propertyResolver: {
      trackColor: (rawValue: any, resolver: any) => {
        const resolveColor = {
          true: resolver(rawValue.true),
          false: resolver(rawValue.false),
        };
        return resolveColor;
      },
    },
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  if (props.colorScheme) {
    const color = props.colorScheme;

    const value = {
      'props': {
        thumbColor: '$muted.50',
        activeThumbColor: '$muted.50',
        trackColor: { false: '$muted.300', true: `$${color}.600` },
        // for ios specifically in unchecked state
        ios_backgroundColor: '$muted.300',
      },
      ':hover': {
        props: {
          trackColor: { false: '$muted.400', true: `$${color}.700` },
          // for ios specifically in unchecked state
          ios_backgroundColor: '$muted.400',
        },
      },

      '_dark': {
        'props': {
          trackColor: { false: '$muted.700', true: `$${color}.500` },
          // for ios specifically in unchecked state
          ios_backgroundColor: '$muted.700',
        },
        ':hover': {
          props: {
            trackColor: { false: '$muted.600', true: `$${color}.400` },
            // for ios specifically in unchecked state
            ios_backgroundColor: '$muted.600',
          },
        },
      },
    };
    return value;
  }
  return {};
}
