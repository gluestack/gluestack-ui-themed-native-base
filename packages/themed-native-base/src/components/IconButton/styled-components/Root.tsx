import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    ':disabled': {
      opacity: '$40',
    },

    '_web': {
      ':disabled': {
        cursor: 'not-allowed',
      },
      'cursor': 'pointer',
      'userSelect': 'none',
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: `$primary.600`,
        outlineStyle: 'solid',
      },
    },
    ':focus': {
      borderColor: `$primary.400`,
    },
    '_dark': {
      _web: {
        ':focusVisible': {
          outlineWidth: '2px',
          outlineColor: `$primary.500`,
          outlineStyle: 'solid',
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
        actionsheetStyle: {},
        unstyled: {},
      },

      size: {
        lg: {
          p: '$3',
          _text: {
            // @ts-ignore
            fontSize: '$md',
          },
          _icon: {
            props: { size: 'lg' },
          },
        },
        md: {
          p: '$2.5',
          _text: {
            // @ts-ignore
            fontSize: '$sm',
          },
          _icon: {
            props: { size: 'md' },
          },
        },
        sm: {
          p: '$2',
          _text: {
            fontSize: '$xs',
          },
          _icon: {
            props: { size: 'sm' },
          },
        },
        xs: {
          p: '$1.5',
          _text: {
            // @ts-ignore
            fontSize: '$xs',
          },
          _icon: {
            props: { size: 'xs' },
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'solid',
      color: 'primary',
    },
  },
  {
    componentName: 'Button',
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorResolveFn, 'iconbutton')],
  }
);

function colorResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    const variant = props.variant;

    switch (variant) {
      case 'ghost':
        value = {
          '_icon': {
            color: `$${color}.600`,
          },
          ':hover': {
            bg: `$${color}.600:alpha.10`,
          },
          ':active': {
            bg: `$${color}.600:alpha.20`,
          },
          ':focus': {
            borderColor: `$${color}.400`,
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            '_icon': {
              color: `$${color}.500`,
            },
            ':hover': {
              bg: `$${color}.500:alpha.10`,
            },
            ':active': {
              bg: `$${color}.500:alpha.20`,
            },
            '_web': {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
        break;
      case 'outline':
        value = {
          'borderWidth': '1px',
          'borderColor': `$${color}.600`,
          '_icon': {
            color: `$${color}.600`,
          },
          ':hover': {
            bg: `$${color}.700`,
            _icon: {
              color: '$muted.50',
            },
          },
          ':active': {
            bg: `$${color}.800`,
            _icon: {
              color: '$muted.50',
            },
          },
          ':focus': {
            bg: `$${color}.600`,
            borderColor: `$${color}.400`,
            _icon: {
              color: '$muted.50',
            },
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            'borderColor': `$${color}.500`,
            '_icon': {
              color: `$${color}.500`,
            },
            ':hover': {
              bg: `$${color}.400`,
              _icon: {
                color: '$muted.900',
              },
            },
            ':active': {
              bg: `$${color}.300`,
              _icon: {
                color: '$muted.900',
              },
            },
            ':focus': {
              bg: `$${color}.500`,
              _icon: {
                color: '$muted.900',
              },
            },
            '_web': {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
        break;
      case 'solid':
        value = {
          'bg': `$${color}.600`,
          ':hover': {
            bg: `$${color}.700`,
          },
          ':active': {
            bg: `$${color}.800`,
          },
          '_icon': {
            color: '$muted.50',
          },
          ':focus': {
            borderColor: `$${color}.400`,
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            'bg': `$${color}.500`,
            ':hover': {
              bg: `$${color}.400`,
            },
            ':active': {
              bg: `$${color}.300`,
              _icon: {
                color: '$muted.900',
              },
            },
            '_icon': {
              color: '$muted.900',
            },
            '_web': {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
        break;
      case 'subtle':
        value = {
          '_icon': {
            color: `$${color}.900`,
          },
          'bg': `$${color}.100`,
          ':hover': {
            bg: `$${color}.200`,
          },
          ':active': {
            bg: `$${color}.300`,
          },
          ':focus': {
            borderColor: `$${color}.400`,
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            'bg': `$${color}.300`,
            ':hover': {
              bg: `$${color}.200`,
            },
            ':active': {
              bg: `$${color}.100`,
            },
            '_web': {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
        break;
      case 'link':
        value = {
          '_spinner': {
            color: `$${color}.600`,
          },
          '_icon': {
            color: `$${color}.600`,
          },
          ':hover': {
            _icon: {
              color: `$${color}.700`,
            },
          },
          ':active': {
            _icon: {
              color: `$${color}.800`,
            },
          },
          ':focus': {
            borderColor: `$${color}.400`,
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            '_icon': {
              color: `$${color}.500`,
            },
            ':hover': {
              _icon: {
                color: `$${color}.400`,
              },
            },
            ':active': {
              _icon: {
                color: `$${color}.300`,
              },
            },
            '_web': {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
        break;
      default:
        value = {
          ':focus': {
            borderColor: `$${color}.400`,
          },
          '_web': {
            ':focusVisible': {
              outlineColor: `$${color}.600`,
            },
          },
          '_dark': {
            _web: {
              ':focusVisible': {
                outlineColor: `$${color}.500`,
              },
            },
          },
        };
    }
  }
  return value;
}
