import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,

    // @ts-ignore
    borderWidth: 2,
    // @ts-ignore
    borderRadius: '$full',
    padding: 1,

    // '_indicator': {
    //   backgroundColor: '$muted.50',
    //   borderColor: '$muted.400',
    // },
    // ':checked': {
    //   '_indicator': {
    //     borderColor: `$primary.600`,
    //   },
    //   '_icon': {
    //     color: `$primary.600`,
    //   },
    //   ':hover': {
    //     '_indicator': {
    //       borderColor: `$primary.700`,
    //     },
    //     '_icon': { color: `$primary.700` },
    //     ':disabled': {
    //       _indicator: {
    //         borderColor: `$primary.600`,
    //       },
    //       _icon: {
    //         color: `$primary.600`,
    //       },
    //     },
    //   },
    //   ':active': {
    //     _indicator: {
    //       borderColor: `$primary.800`,
    //     },
    //     _icon: { color: `$primary.800` },
    //   },
    // },

    // ':hover': {
    //   '_indicator': {
    //     borderColor: '$muted.500',
    //   },
    //   ':disabled': {
    //     _indicator: {
    //       borderColor: '$muted.400',
    //     },
    //   },
    //   ':checked': {
    //     _indicator: { borderColor: `$primary.600` },
    //   },
    // },

    // ':active': {
    //   _indicator: {
    //     borderColor: '$muted.600',
    //   },
    // },

    // ':invalid': {
    //   _indicator: {
    //     borderColor: '$error.600',
    //   },
    // },

    // '_dark': {
    //   // @ts-ignore
    bg: '$muted.900',
    //   'borderColor': '$muted.500',

    //   ':checked': {
    //     'borderColor': `$primary.500`,
    //     '_icon': {
    //       color: `$primary.500`,
    //     },
    //     ':hover': {
    //       'borderColor': `$primary.400`,
    //       '_icon': { color: `$primary.400` },
    //       ':disabled': {
    //         borderColor: `$primary.500`,
    //         _icon: {
    //           color: `$primary.500`,
    //         },
    //       },
    //     },
    //     ':active': {
    //       borderColor: `$primary.300`,
    //       _icon: { color: `$primary.300` },
    //     },
    //   },

    //   ':hover': {
    //     borderColor: '$muted.400',
    //     _disabled: {
    //       borderColor: '$muted.500',
    //     },
    //     _checked: { borderColor: `$primary.600` },
    //   },

    //   ':active': {
    //     borderColor: '$muted.300',
    //   },

    // ':invalid': {
    //   borderColor: '$error.500',
    // },
    // },

    // ':disabled': {
    //   _web: {
    //     cursor: 'not-allowed',
    //   },
    //   opacity: 0.6,
    //   _icon: {
    //     backgroundColor: 'transparent',
    //   },
    // },

    variants: {
      size: {
        lg: {
          _text: {
            // @ts-ignore
            fontSize: '$lg',
            // @ts-ignore
            lineHeight: '$xl',
          },
          _indicator: {
            height: '$7',
            width: '$7',
          },
        },

        md: {
          _text: {
            // @ts-ignore
            fontSize: '$md',
            // @ts-ignore
            lineHeight: '$md',
          },
          _indicator: {
            height: '$6',
            width: '$6',
          },
        },

        sm: {
          _text: {
            // @ts-ignore
            fontSize: '$sm',
            // @ts-ignore
            lineHeight: '$sm',
          },

          _indicator: {
            height: '$5',
            width: '$5',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'Radio',
    descendantStyle: ['_icon', '_text', '_indicator'],
    ancestorStyle: ['_radio'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    value = {
      '_indicator': {
        backgroundColor: '$muted.50',
        borderColor: '$muted.400',
      },

      ':checked': {
        '_indicator': {
          borderColor: `$${color}.600`,
        },

        '_icon': {
          color: `$${color}.600`,
        },
        ':hover': {
          '_indicator': {
            borderColor: `$${color}.700`,
          },
          '_icon': { color: `$${color}.700` },
          ':disabled': {
            _indicator: {
              borderColor: `$${color}.600`,
            },
            _icon: {
              color: `$${color}.600`,
            },
          },
        },
        ':active': {
          _indicator: {
            borderColor: `$${color}.800`,
          },
          _icon: { color: `$${color}.800` },
        },

        ':invalid': {
          _indicator: {
            borderColor: '$error.600',
          },
        },
      },

      ':hover': {
        '_indicator': {
          borderColor: '$muted.500',
        },
        ':disabled': {
          _indicator: {
            borderColor: '$muted.400',
          },
        },
        ':checked': {
          _indicator: {
            borderColor: `$${color}.600`,
          },
        },
      },

      ':active': {
        _indicator: {
          borderColor: '$muted.600',
        },
      },

      ':invalid': {
        _indicator: {
          borderColor: '$error.600',
        },
      },

      '_dark': {
        '_indicator': {
          backgroundColor: '$muted.900',
          borderColor: '$muted.500',
        },

        ':checked': {
          '_indicator': {
            borderColor: `$${color}.500`,
          },
          '_icon': {
            color: `$${color}.500`,
          },
          ':hover': {
            '_indicator': {
              borderColor: `$${color}.400`,
            },
            '_icon': { color: `$${color}.400` },
            ':disabled': {
              _indicator: {
                borderColor: `$${color}.500`,
              },
              _icon: {
                color: `$${color}.500`,
              },
            },
          },
          ':active': {
            _indicator: {
              borderColor: `$${color}.300`,
            },
            _icon: { color: `$${color}.300` },
          },
        },

        ':hover': {
          '_indicator': {
            borderColor: '$muted.400',
          },
          ':disabled': {
            _indicator: {
              borderColor: '$muted.500',
            },
          },
          ':checked': {
            _indicator: {
              borderColor: `$${color}.600`,
            },
          },
        },

        ':active': {
          _indicator: {
            borderColor: '$muted.300',
          },
        },

        ':invalid': {
          _indicator: {
            borderColor: '$error.500',
          },
        },
      },

      '_web': {
        ':focusVisible': {
          _indicator: {
            outlineColor: `$${color}.400`,
          },
        },
      },
    };
  }

  return value;
}
