import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  Pressable,
  {
    // @ts-ignore
    'rounded': '$full',
    'zIndex': 20,
    // @ts-ignore
    'p': 16,
    'flexDirection': 'row',

    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',
    'gap': 6,

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '0',
        // @ts-ignore
        style: { boxShadow: `$primary400 0px 0px 0px 2px` },
      },
      ':disabled': {
        cursor: 'not-allowed',
      },
      '_dark': {
        ':focusVisible': {
          outlineWidth: '0',
          // @ts-ignore
          style: { boxShadow: `$primary500 0px 0px 0px 2px` },
        },
      },
    },

    'variants': {
      variant: {
        ghost: {},
        outline: {},
        solid: {},
        subtle: {},
        link: {},
      },

      placement: {
        'top right': {
          top: '$4',
          right: '$4',
        },

        'top left': {
          top: '$4',
          left: '$4',
        },

        'bottom-right': {
          bottom: '$4',
          right: '$4',
        },

        'bottom-left': {
          bottom: '$4',
          left: '$4',
        },

        'top-center': {
          top: '$4',
          alignSelf: 'center',
        },

        'bottom-center': {
          bottom: '$4',
          alignSelf: 'center',
        },
      },

      size: {
        lg: {
          _text: {
            // @ts-ignore
            fontSize: '$md',
          },
          _icon: {
            props: {
              size: 20,
            },
            height: '$5',
            width: '$5',
          },
        },
        md: {
          _text: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _icon: {
            height: '$4',
            width: '$4',
          },
        },
        sm: {
          _text: {
            // @ts-ignore
            fontSize: '$xs',
          },
          _icon: {
            height: '$4',
            width: '$4',
          },
        },
        xs: {
          _text: {
            // @ts-ignore
            fontSize: '$2xs',
          },
          _icon: {
            height: '$3',
            width: '$3',
          },
        },
      },
    },

    'defaultProps': {
      shadow: '7',
      placement: 'bottom-right',
      variant: 'solid',
      size: 'md',
    },
  },
  {
    componentName: 'Fab',
    descendantStyle: ['_text', '_icon'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};

  if (props.colorScheme) {
    const color = props.colorScheme;

    const variant = props.variant;
    switch (variant) {
      case 'ghost':
        value = {
          '_text': {
            color: `$${color}.600`,
          },
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },
          ':hover': {
            backgroundColor: `$${color}.300.alpha0.1`,
          },
          ':active': {
            backgroundColor: `$${color}.400.alpha0.2`,
          },

          '_dark': {
            '_text': {
              color: `$${color}.500`,
            },
            '_icon': {
              color: `$${color}.500`,
            },
            '_spinner': {
              props: {
                color: `$${color}.500`,
              },
            },
            ':hover': {
              backgroundColor: `$${color}.500.alpha0.1`,
            },
            ':active': {
              backgroundColor: `$${color}.500.alpha0.2`,
            },
          },
        };
        break;
      case 'outline':
        value = {
          // @ts-ignore
          'borderWidth': 1,
          'borderColor': '$muted.300',
          '_text': {
            color: `$${color}.600`,
          },
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },
          ':hover': {
            backgroundColor: `$${color}.600.alpha0.1`,
          },
          ':active': {
            backgroundColor: `$${color}.600.alpha0.2`,
          },

          '_dark': {
            'borderColor': '$muted.700',
            '_text': {
              color: `$${color}.500`,
            },
            '_icon': {
              color: `$${color}.500`,
            },
            '_spinner': {
              props: {
                color: `$${color}.500`,
              },
            },
            ':hover': {
              backgroundColor: `$${color}.500.alpha0.1`,
            },
            ':active': {
              backgroundColor: `$${color}.500.alpha0.2`,
            },
          },
        };
        break;
      case 'solid':
        value = {
          '_text': {
            color: '$text.50',
          },
          '_icon': {
            color: '$text.50',
          },
          '_spinner': {
            props: {
              color: `$text.50`,
            },
          },
          // @ts-ignore
          'bg': `$${color}.600`,
          ':hover': {
            backgroundColor: `$${color}.700`,
          },
          ':active': {
            backgroundColor: `$${color}.800`,
          },

          '_dark': {
            // @ts-ignore
            'bg': `$${color}.600`,
            ':hover': {
              backgroundColor: `$${color}.700`,
            },
            ':active': {
              backgroundColor: `$${color}.800`,
            },
          },
        };
        break;
      case 'subtle':
        value = {
          // @ts-ignore
          'bg': `$${color}.100`,
          '_text': {
            color: `$${color}.900`,
          },
          '_icon': {
            color: `$${color}.900`,
          },
          '_spinner': {
            props: {
              color: `$${color}.900`,
            },
          },
          ':hover': {
            backgroundColor: `$${color}.200`,
          },
          ':active': {
            backgroundColor: `$${color}.300`,
          },

          '_dark': {
            // @ts-ignore
            'bg': `$${color}.300`,
            ':hover': {
              backgroundColor: `$${color}.200`,
            },
            ':active': {
              backgroundColor: `$${color}.100`,
            },
          },
        };
        break;
      case 'link':
        value = {
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },

          ':hover': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            _text: {
              color: `$${color}.800`,
              textDecorationLine: 'underline',
            },
          },

          '_text': {
            color: `$${color}.600`,
          },
          '_dark': {
            '_text': {
              color: `$${color}.500`,
            },
            ':active': {
              _text: {
                color: `$${color}.300`,
              },
            },
          },
        };
        break;
    }
  }
  return value;
}
