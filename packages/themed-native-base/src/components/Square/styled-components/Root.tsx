import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        'xs': {
          height: 10,
          width: 10,
        },
        'sm': {
          height: 12,
          width: 12,
        },
        'md': {
          height: 16,
          width: 16,
        },
        'lg': {
          height: 24,
          width: 24,
        },
        'xl': {
          height: 32,
          width: 32,
        },
        '2xl': {
          height: 40,
          width: 40,
        },
      },
    },
    // defaultProps: { size: 'lg' },
  },
  {
    componentName: 'Square',
    descendantStyle: ['_text'],
    resolveProps: ['colors'],
  } as const,
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(`$${color}`);
        });
        return rawValue;
      },
    },
  }
);
