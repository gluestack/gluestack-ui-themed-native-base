import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
import { deepMerge } from '../utils';

class ColorSchemeResolver implements IStyledPlugin {
  name: string;
  callback: any;

  // for debug purpose only
  from?: string;
  styledComponentConfig: any;
  themed: any;
  // no other use

  register() {}

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
    Component: any,
    ...args: any
  ) {
    if (_shouldUpdate) this.themed = _styledObj;
    delete args?.[1]?.plugins;
    this.styledComponentConfig = args;
    return [_styledObj, _shouldUpdate, _, Component];
  }

  componentMiddleWare({ Component }: any) {
    if (Component.displayName === 'COLOR_SCHEME_COMPONENT') {
      return Component;
    }
    const StyledComponent = styled(
      Component,
      {},
      ...this.styledComponentConfig
    );

    const ColorSchemeResolvedComponent = forwardRef(
      ({ key, ...componentProps }: any, ref?: any) => {
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

        if (restProps?.componentName === 'switch') {
          const {
            thumbColor,
            activeThumbColor,
            trackColor,
            ios_backgroundColor,
            ...restModifiedProps
          } = restProps;

          delete restModifiedProps.componentName;

          const sxPassed = {
            props: {
              trackColor,
              thumbColor,
              activeThumbColor,
              ios_backgroundColor,
            },
          };

          const finalStyle = deepMerge(deepMerge(colorSchemeSx, sxPassed), sx);

          const toBeAppliedSx = deepMerge(
            finalStyle,
            colorSchemePassingPropsSx
          );

          return (
            <StyledComponent
              {...restModifiedProps}
              key={key ?? key + '_' + colorScheme}
              ref={ref}
              sx={toBeAppliedSx}
            />
          );
        }

        const finalStyle = deepMerge(colorSchemeSx, sx);

        const toBeAppliedSx = {
          ...finalStyle,
          props: {
            sx: colorSchemePassingPropsSx,
          },
        };

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
    ColorSchemeResolvedComponent.displayName = 'COLOR_SCHEME_COMPONENT';
    return ColorSchemeResolvedComponent;
  }
}
export { ColorSchemeResolver };
