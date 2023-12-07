import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'flex-start',
    space: 3,
    flexShrink: 1,
    borderRadius: '$sm',
    padding: '$3',
    _icon: { props: { size: 'sm' } },

    variants: {
      variant: {
        'solid': {},
        'left-accent': {},
        'top-accent': {},
        'outline': {},
        'subtle': {},
        'outline-light': {},
      },
    },

    defaultProps: {
      variant: 'subtle',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
  },
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
      case 'solid':
        value = {
          backgroundColor: `$${color}.700`,
          _dark: {
            backgroundColor: `$${color}.600`,
          },
          _icon: { color: `$muted.50` },
        };
        break;
      case 'outline-light':
        value = {
          // @ts-ignore
          borderWidth: 1,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700.alpha0.4`,
          _dark: {
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600.alpha0.4`,
          },
        };
        break;
      case 'subtle':
        value = {
          backgroundColor: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          _dark: {
            backgroundColor: `$${color}.200`,
            _icon: { color: `$${color}.600` },
          },
        };
        break;
      case 'outline':
        value = {
          // @ts-ignore
          borderWidth: 1,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      case 'top-accent':
        value = {
          borderTopWidth: 4,
          backgroundColor: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            backgroundColor: `$${color}.200`,
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      case 'left-accent':
        value = {
          borderLeftWidth: 4,
          backgroundColor: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            backgroundColor: `$${color}.200`,
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      default:
        value = {};
    }
    // check for size prop also
    // const variantCallbacks? = getVariant('Text');
    // value = variantCallbacks[variant](props);
  }
  return value;
}
