import React, { createContext, forwardRef, useContext } from 'react';
import type { IStyledPlugin } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
import { StyleSheet } from 'react-native';

const permittedProps = [
  // text style props
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'includeFontPaddingAndroid',
  'fontVariant',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textAlignVerticalAndroid',
  'textDecorationColoriOS',
  'textDecorationLine',
  'textDecorationStyleiOS',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textTransform',
  'verticalAlignAndroid',
  'writingDirectioniOS',
  'userSelect',
  // variants
  // TODO : change this flow so it automatically taked variants from the config
  'isTruncated',
  'bold',
  'underline',
  'strikeThrough',
  'sub',
  'italic',
  'highlight',
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

const ignoreStyleType = ['boot-base', 'global'];

const TextAncestorContext = createContext({
  hasTextAncestor: false,
  stylesPassed: {},
});

class TextStyleResolver implements IStyledPlugin {
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
    if (Component?.displayName === 'TEXT_PLUGIN_COMPONENT') {
      return Component;
    }
    const styles: any = [];
    const nativeStyleMap = GluestackStyleSheet.getStyleMap();
    styleCSSIds.forEach((cssId: any) => {
      const nativeStyle = nativeStyleMap.get(cssId);

      if (nativeStyle && !ignoreStyleType.includes(nativeStyle.type)) {
        const styleSheet = nativeStyle?.resolved;
        if (styleSheet) {
          const textStyleSheet = Object.fromEntries(
            Object.keys(styleSheet)
              .filter((key) => permittedProps.includes(key))
              .map((key) => [key, styleSheet[key]])
          );
          styles.push(textStyleSheet);
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
        const { stylesPassed } = useContext(TextAncestorContext);
        const finalStyle = { ...stylesPassed, ...stylesObj };

        return (
          <TextAncestorContext.Provider
            value={{
              hasTextAncestor: true,
              stylesPassed: finalStyle,
            }}
          >
            <StyledComponent
              {...componentProps}
              key={key}
              ref={ref}
              style={finalStyle}
            >
              {children}
            </StyledComponent>
          </TextAncestorContext.Provider>
        );
      }
    );

    //@ts-ignore
    TextStyledResolvedComponent.isStyledComponent = true;
    TextStyledResolvedComponent.displayName = 'TEXT_PLUGIN_COMPONENT';

    return TextStyledResolvedComponent;
  }
}

export { TextStyleResolver };
