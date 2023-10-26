import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from "@gluestack-style/react"

export class ColorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  // for debug purpose only
  from?: string;
  // no other use

  register() { }

  constructor(callback: any, from?: any) {
    this.name = 'ColorSchemeResolver';
    this.callback = callback;
    this.from = from;
  }
  // @ts-ignore
  inputMiddleWare(
    _styledObj: any = {},
    _shouldUpdate: boolean = true,
    _: boolean = false,
    Component: any
  ) {
    return [_styledObj, _shouldUpdate, _, Component];
  }

  componentMiddleWare({ Component }: any) {
    const StyledComponent = styled(Component, {});

    const ColorSchemeResolvedComponent = forwardRef(
      ({ key, ...componentProps }: any, ref?: any) => {
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
        console.log(componentProps)
        const toBeAppliedSx = {
          ...sx,
          ...colorSchemeSx,
          props: {
            sx: colorSchemePassingPropsSx,
          },
        };
        console.log(toBeAppliedSx)
        return (
          <StyledComponent
            {...restProps}
            key={key ?? key + '_' + colorScheme}
            ref={ref}
            sx={toBeAppliedSx}
          />
        );
      }
    );

    //@ts-ignore
    ColorSchemeResolvedComponent.isStyledComponent = true;
    return ColorSchemeResolvedComponent;
  }
}
