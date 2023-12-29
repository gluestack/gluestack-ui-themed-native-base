import React, { forwardRef } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
import { StyleSheet, Platform } from 'react-native';

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

  componentMiddleWare({ Component, styleCSSIds, GluestackStyleSheet }: any) {
    const styles: any = [];
    const nativeStyleMap = GluestackStyleSheet.getStyleMap();
    styleCSSIds.forEach((cssId: any) => {
      const nativeStyle = nativeStyleMap.get(cssId);

      if (nativeStyle) {
        const styleSheet = nativeStyle?.resolved;
        if (styleSheet) {
          styles.push(styleSheet);
        }
      }
    });
    const stylesObj = StyleSheet.flatten(styles);

    const StyledComponent = styled(
      Component,
      {},
      ...this.styledComponentConfig
    );

    const TextStyledResolvedComponent = forwardRef(
      ({ key, children, ...componentProps }: any, ref?: any) => {
        const resolvedStyle = resolveStyleForNative(stylesObj);

        return (
          <StyledComponent
            {...componentProps}
            key={key}
            ref={ref}
            style={resolvedStyle}
          >
            {children}
          </StyledComponent>
        );
      }
    );

    //@ts-ignore
    TextStyledResolvedComponent.isStyledComponent = true;
    TextStyledResolvedComponent.displayName = 'TEXT_PLUGIN_COMPONENT';

    return TextStyledResolvedComponent;
  }
}

function resolveStyleForNative(stylesObj: any) {
  if (Platform.OS === 'web') {
    return stylesObj;
  }
  let { fontSize, lineHeight, letterSpacing } = stylesObj;
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
  return { ...stylesObj, fontSize, lineHeight, letterSpacing };
}
