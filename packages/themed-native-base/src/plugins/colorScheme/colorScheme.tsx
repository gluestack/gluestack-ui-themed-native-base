import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
import { View, Pressable } from 'react-native';
const NewComp = styled(Pressable, {});

export class ColorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  // for debug purpose only
  from?: string;
  // no other use

  register() {}

  constructor(callback: any, from?: any) {
    this.name = 'ColorSchemeResolver';
    this.callback = callback;
    this.from = from;
  }

  inputMiddleWare(...args: any) {
    console.log(this.from, 'inputMiddleWare');

    return args;
  }

  componentMiddleWare({ Component }: any) {
    if (Component.displayName === 'Pressable') {
      console.log(Component, '>>>> ***');

      const StyledComponent = styled(Component, {});
      return StyledComponent;
      return forwardRef(({ key, ...componentProps }: any, ref?: any) => {
        // return <NewComp />;

        const colorSchemeSx: any = {};
        const colorSchemePassingPropsSx: any = {};

        const { sx, colorScheme, ...restProps } = componentProps;

        if (colorScheme) {
          const colorSchemeStyle = this.callback(componentProps);

          Object.keys(colorSchemeStyle).forEach((styleKey) => {
            if (
              styleKey.startsWith('_') ||
              styleKey.startsWith(':') ||
              styleKey.startsWith('@')
            ) {
              colorSchemeSx[styleKey] = colorSchemeStyle[styleKey];
            } else {
              colorSchemePassingPropsSx[styleKey] = colorSchemeStyle[styleKey];
            }
          });
        }

        const toBeAppliedSx = {
          ...sx,
          ...colorSchemeSx,
          props: {
            sx: colorSchemePassingPropsSx,
          },
        };

        console.log('>>>>>', restProps, Component, '>>>>>');

        return (
          <Component
            {...restProps}
            key={key ?? key + '_' + colorScheme}
            ref={ref}
            sx={toBeAppliedSx}
          />
        );
      });
    } else {
      return Component;
    }
    // return styled(Component, {});
  }
}
