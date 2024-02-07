import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
import { Platform, StyleSheet } from 'react-native';
import { stableHash } from '../utils';

export class TextStyleResolver implements IStyledPlugin {
  name: string;

  // for debug purpose only
  from?: string;
  styledComponentConfig: any;
  themed: any;
  // no other use

  register() {}

  constructor() {
    this.name = 'TextStyleResolver';
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

  componentMiddleWare({ Component, GluestackStyleSheet }: any) {
    const StyledComponent = styled(
      Component,
      {},
      ...this.styledComponentConfig
    );

    const TextStyledResolvedComponent = forwardRef(
      ({ key, children, style, ...componentProps }: any, ref?: any) => {
        if (Platform.OS !== 'web') {
          const styles: any = [];
          const nativeStyleMap = GluestackStyleSheet.getStyleMap();
          componentProps['data-style'].split(' ').forEach((cssId: any) => {
            const nativeStyle = nativeStyleMap.get(cssId);

            if (nativeStyle) {
              const styleSheet = nativeStyle?.resolved;
              if (styleSheet) {
                styles.push(styleSheet);
              }
            }
          });
          delete componentProps['data-style'];
          const stylesObj = StyleSheet.flatten(styles);
          const styleObj = StyleSheet.flatten(style);
          const resolvedStyle = resolveStyleForNative({
            ...styleObj,
            ...stylesObj,
          });

          return (
            <StyledComponent
              {...componentProps}
              sx={{
                ...stylesObj,
                props: { style: resolvedStyle },
                // _text: filterProps(resolvedStyle),
              }}
              key={key + stableHash(resolvedStyle)}
              ref={ref}
            >
              {children}
            </StyledComponent>
          );
        } else {
          return (
            <StyledComponent {...componentProps} ref={ref}>
              {children}
            </StyledComponent>
          );
        }
      }
    );

    //@ts-ignore
    TextStyledResolvedComponent.isStyledComponent = true;
    TextStyledResolvedComponent.displayName = 'TEXT_PLUGIN_COMPONENT';

    return TextStyledResolvedComponent;
  }
}

function resolveStyleForNative(styleSheet: any) {
  if (styleSheet) {
    if (Array.isArray(styleSheet)) {
      styleSheet.map((styleObj) => resolveStyleForNative(styleObj));
    } else {
      let { fontSize, lineHeight, letterSpacing } = styleSheet;
      if (String(fontSize).endsWith('rem')) {
        fontSize = parseFloat(fontSize) * 16;
      }
      if (String(lineHeight).endsWith('rem')) {
        lineHeight = parseFloat(lineHeight) * 16;
      } else if (String(lineHeight).endsWith('em')) {
        lineHeight = parseFloat(lineHeight) * fontSize;
      }
      if (String(letterSpacing).endsWith('rem')) {
        letterSpacing = parseFloat(letterSpacing) * 16;
      } else if (String(letterSpacing).endsWith('em')) {
        letterSpacing = parseFloat(letterSpacing) * fontSize;
      }
      return { ...styleSheet, fontSize, lineHeight, letterSpacing };
    }
  }
  return styleSheet;
}
