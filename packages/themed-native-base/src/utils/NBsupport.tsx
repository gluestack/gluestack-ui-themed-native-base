// @ts-nocheck

import { usePropResolution } from '../hooks/usePropResolution';

export const colorScheme = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'lightBlue',
  'darkBlue',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'warmGray',
  'trueGray',
  'gray',
  'coolGray',
  'blueGray',
  'dark',
  'danger',
  'error',
  'success',
  'warning',
  'muted',
  'primary',
  'info',
  'secondary',
  'light',
  'tertiary',
];

function hexToRgba(hex: any, alpha: any) {
  let r = '',
    g = '',
    b = '';
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }
  return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + alpha.toString() + ')';
}

export function resolveAlphaColors(rawValue: any, resolver: any) {
  if (typeof rawValue === 'string' && rawValue.includes(':alpha.')) {
    const opacity = resolver(rawValue.split(':alpha.')[1], 'opacity');
    const value = rawValue.split(':alpha.')[0];
    return hexToRgba(resolver(value), opacity);
  } else {
    return resolver(rawValue);
  }
}

export function transformFactoryToStyled(factoryStyle?: any) {
  let transformedTheme: any = {
    variants: {
      variant: {},
      size: {},
    },
    defaultProps: {},
  };

  if (factoryStyle)
    Object.keys(factoryStyle).forEach((key) => {
      switch (key) {
        case 'baseStyle':
          const { sx: sxBS, ...baseStyle } = usePropResolution(
            factoryStyle.baseStyle
          );
          transformedTheme = { ...transformedTheme, ...baseStyle, ...sxBS };
          break;

        case 'defaultProps':
          const { sx: sxDP, ...defaultProps } = usePropResolution(
            factoryStyle.defaultProps
          );
          transformedTheme = {
            ...transformedTheme,
            defaultProps: { ...defaultProps, ...sxDP },
          };
          break;

        case 'variants':
          const Variants = factoryStyle.variants;
          Object.keys(Variants).forEach((variant) => {
            const { sx: sxVariant, ...styleVariant } = usePropResolution(
              Variants[variant]
            );
            transformedTheme.variants.variant[variant] = {
              ...styleVariant,
              ...sxVariant,
            };
          });
          break;

        case 'sizes':
          const Sizes = factoryStyle.sizes;
          Object.keys(Sizes).forEach((size) => {
            const { sx: sxStyle, ...styleSize } = usePropResolution(
              Variants[size]
            );
            transformedTheme.variants.variant[size] = {
              ...styleSize,
              ...sxStyle,
            };
          });
          break;

        default:
        // nothing
      }
    });
  return transformedTheme;
}

const permittedProps = [
  'color',
  'fontSize',
  'fontFamily',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'isTruncated',
  'bold',
  'italic',
  'underline',
  'strikeThrough',
  'sub',
  'highlight',
  'textAlign',
  'textDecorationLine',
];

export function filterProps(obj: any) {
  const filteredObj: any = {};

  for (const key of Object.keys(obj)) {
    if (permittedProps.includes(key)) {
      filteredObj[key] = obj[key];
    } else if (typeof obj[key] === 'object') {
      const filteredNested = filterProps(obj[key]);
      if (Object.keys(filteredNested).length > 0) {
        filteredObj[key] = filteredNested;
      }
    }
  }

  return filteredObj;
}
