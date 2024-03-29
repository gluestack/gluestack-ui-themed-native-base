// @ts-nocheck

import { Platform } from 'react-native';
import get from 'lodash.get';
import cloneDeep from 'lodash.clonedeep';
import Color from 'tinycolor2';
export * from './stablehash';
export * from './modifyConfig';

const dontResolveFromToken = ['top', 'left', 'right', 'bottom'];

export const CSSPropertiesMap = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'auto',
  aspectRatio: 'auto',
  borderBottomWidth: '0',
  borderLeftWidth: '0',
  borderRightWidth: '0',
  borderTopWidth: '0',
  borderEndWidth: '0',
  borderStartWidth: '0',
  borderWidth: '0',
  bottom: 'auto',
  direction: 'ltr',
  display: 'flex',
  // end: 'auto',
  // start: 'auto',
  flex: 'none',
  flexDirection: 'column',
  flexBasis: 'auto',
  flexGrow: '0',
  flexShrink: '1',
  flexWrap: 'nowrap',
  gap: 'normal',
  rowGap: 'normal',
  columnGap: 'normal',
  height: 'auto',
  justifyContent: 'flex-start',
  left: 'auto',
  margin: '0',
  marginBottom: '0',
  marginHorizontal: '0',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  marginVertical: '0',
  marginEnd: '0',
  marginStart: '0',
  maxHeight: 'none',
  maxWidth: 'none',
  minHeight: 'auto',
  minWidth: 'auto',
  padding: '0',
  paddingBottom: '0',
  paddingHorizontal: '0',
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '0',
  paddingVertical: '0',
  paddingEnd: '0',
  paddingStart: '0',
  position: 'relative',
  right: 'auto',
  top: 'auto',
  width: 'auto',
  zIndex: 'auto',
  shadowColor: 'transparent',
  shadowOffset: '0px 0px',
  shadowOpacity: '0',
  shadowRadius: '0',
  transform: 'none',
  transformOrigin: 'initial',
  backfaceVisibility: 'visible',
  backgroundColor: 'transparent',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
  borderColor: 'initial',
  borderRadius: '0',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  opacity: '1',
  overflow: 'visible',
  overflowX: 'visible',
  overflowY: 'visible',
  borderBottomColor: 'initial',
  borderLeftColor: 'initial',
  borderRightColor: 'initial',
  borderStyle: 'none',
  borderTopColor: 'initial',
  elevation: '0',
  color: 'initial',
  fontFamily: 'system-ui',
  fontSize: 'initial',
  fontStyle: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
  fontWeight: 'normal',
  lineHeight: 'initial',
  textAlign: 'auto',
  textDecorationLine: 'none',
  textShadowColor: 'transparent',
  textShadowOffset: '0px 0px',
  textShadowRadius: '0',
  textAlignVertical: 'auto',
  letterSpacing: 'normal',
  textDecorationColor: 'initial',
  textDecorationStyle: 'solid',
  borderBottomEndRadius: '0',
  borderBottomStartRadius: '0',
  borderEndColor: 'initial',
  borderStartColor: 'initial',
  borderTopEndRadius: '0',
  borderTopStartRadius: '0',
};

const borderStyles = 'borderStyles';
const borderWidths = 'borderWidths';
const colors = 'colors';
const mediaQueries = 'mediaQueries';
const opacity = 'opacity';
const fonts = 'fonts';
const fontSizes = 'fontSizes';
const fontWeights = 'fontWeights';
const letterSpacings = 'letterSpacings';
const lineHeights = 'lineHeights';
const radii = 'radii';
const shadows = 'shadows';
const space = 'space';
const transitions = 'transitions';
const zIndices = 'zIndices';

export const propertyTokenMap = {
  gap: space,
  gridGap: space,
  columnGap: space,
  gridColumnGap: space,
  rowGap: space,
  gridRowGap: space,
  inset: space,
  insetBlock: space,
  insetBlockEnd: space,
  insetBlockStart: space,
  insetInline: space,
  insetInlineEnd: space,
  insetInlineStart: space,
  margin: space,
  marginTop: space,
  marginRight: space,
  marginBottom: space,
  marginLeft: space,
  marginBlock: space,
  marginBlockEnd: space,
  marginBlockStart: space,
  marginInline: space,
  marginInlineEnd: space,
  marginInlineStart: space,

  marginHorizontal: space,
  marginVertical: space,
  padding: space,
  paddingTop: space,
  paddingRight: space,
  paddingBottom: space,
  paddingLeft: space,

  paddingBlock: space,
  paddingBlockEnd: space,
  paddingBlockStart: space,
  paddingInline: space,
  paddingInlineEnd: space,
  paddingInlineStart: space,

  paddingHorizontal: space,
  paddingVertical: space,
  paddingStart: space,
  paddingEnd: space,

  top: space,
  right: space,
  bottom: space,
  left: space,
  scrollMargin: space,
  scrollMarginTop: space,
  scrollMarginRight: space,
  scrollMarginBottom: space,
  scrollMarginLeft: space,
  scrollMarginX: space,
  scrollMarginY: space,
  scrollMarginBlock: space,
  scrollMarginBlockEnd: space,
  scrollMarginBlockStart: space,
  scrollMarginInline: space,
  scrollMarginInlineEnd: space,
  scrollMarginInlineStart: space,
  scrollPadding: space,
  scrollPaddingTop: space,
  scrollPaddingRight: space,
  scrollPaddingBottom: space,
  scrollPaddingLeft: space,
  scrollPaddingX: space,
  scrollPaddingY: space,
  scrollPaddingBlock: space,
  scrollPaddingBlockEnd: space,
  scrollPaddingBlockStart: space,
  scrollPaddingInline: space,
  scrollPaddingInlineEnd: space,
  scrollPaddingInlineStart: space,
  // shadowOffset: space,
  shadowRadius: space,
  elevation: space,

  fontSize: fontSizes,

  background: colors,
  backgroundColor: colors,
  backgroundImage: colors,
  borderImage: colors,
  border: colors,
  borderBlock: colors,
  borderBlockEnd: colors,
  borderBlockStart: colors,
  borderBottom: colors,
  borderBottomColor: colors,
  borderColor: colors,
  borderInline: colors,
  borderInlineEnd: colors,
  borderInlineStart: colors,
  borderLeft: colors,
  borderLeftColor: colors,
  borderRight: colors,
  borderRightColor: colors,
  borderTop: colors,
  borderTopColor: colors,
  caretColor: colors,
  color: colors,
  columnRuleColor: colors,
  fill: colors,
  outline: colors,
  outlineColor: colors,
  outlineWidth: space,
  stroke: colors,
  textDecorationColor: colors,
  shadowColor: colors,

  shadowOpacity: opacity,

  shadow: shadows,
  // Media Query
  condition: mediaQueries,

  fontFamily: fonts,

  fontWeight: fontWeights,

  lineHeight: lineHeights,

  letterSpacing: letterSpacings,

  blockSize: space,
  minBlockSize: space,
  maxBlockSize: space,
  inlineSize: space,
  minInlineSize: space,
  maxInlineSize: space,
  width: space,
  minWidth: space,
  maxWidth: space,
  height: space,
  minHeight: space,
  maxHeight: space,
  flexBasis: space,
  gridTemplateColumns: space,
  gridTemplateRows: space,

  borderWidth: borderWidths,
  borderTopWidth: borderWidths,
  borderRightWidth: borderWidths,
  borderBottomWidth: borderWidths,
  borderLeftWidth: borderWidths,

  borderStyle: borderStyles,
  borderTopStyle: borderStyles,
  borderRightStyle: borderStyles,
  borderBottomStyle: borderStyles,
  borderLeftStyle: borderStyles,

  borderRadius: radii,
  borderTopLeftRadius: radii,
  borderTopRightRadius: radii,
  borderBottomRightRadius: radii,
  borderBottomLeftRadius: radii,

  boxShadow: colors,
  textShadow: shadows,

  transition: transitions,

  zIndex: zIndices,
};

export const renamePseudoMap: any = {
  _indeterminate: ':indeterminate',
  _checked: ':checked',
  _readOnly: ':readOnly',
  _required: ':required',
  _invalid: ':invalid',
  _focus: ':focus',
  _focusVisible: ':focusVisible',
  _hover: ':hover',
  _pressed: ':active',
  _active: ':active',
  _disabled: ':disabled',
  // _web: '_web',
  // _android: '_android',
  // _ios: '_ios',
  // _light: '_light',
  // _dark: '_dark',
};
export const BASE_FONT_SIZE = 16;
export const convertAbsoluteToRem = (px: number) => {
  return `${px / BASE_FONT_SIZE}rem`;
};
export const convertAbsoluteToPx = (px: number) => {
  return `${px}px`;
};

export const convertRemToAbsolute = (rem: number) => {
  return rem * BASE_FONT_SIZE;
};

export const platformSpecificSpaceUnits = (theme: any) => {
  const scales = ['space', 'sizes', 'fontSizes'];

  const newTheme = cloneDeep(theme);
  const isWeb = Platform.OS === 'web';
  scales.forEach((key) => {
    const scale = get(theme.tokens, key, {});
    const newScale = { ...scale };
    for (const scaleKey in scale) {
      const val = scale[scaleKey];
      if (typeof val !== 'object') {
        const isAbsolute = typeof val === 'number';
        const isPx = !isAbsolute && val.endsWith('px');
        const isRem = !isAbsolute && val.endsWith('rem');
        const isEm = !isAbsolute && val.endsWith('em');

        // If platform is web, we need to convert absolute unit to rem. e.g. 16 to 1rem
        if (isWeb) {
          if (isAbsolute) {
            newScale[scaleKey] = convertAbsoluteToRem(val);
          }
        }
        // If platform is not web, we need to convert px unit to absolute and rem unit to absolute. e.g. 16px to 16. 1rem to 16.
        else {
          if (isRem || isEm) {
            newScale[scaleKey] = convertRemToAbsolute(parseFloat(val));
          } else if (isPx) {
            newScale[scaleKey] = parseFloat(val);
          }
        }
      }
    }
    newTheme.tokens[key] = newScale;
  });

  return newTheme;
};

export function renamePseudoClasses(obj: any) {
  for (const key in obj) {
    if (renamePseudoMap[key]) {
      obj[renamePseudoMap[key]] = obj[key];
      delete obj[key];
      renamePseudoClasses(obj[key]);
    } else if (typeof obj[key] === 'object') {
      renamePseudoClasses(obj[key]);
    }
  }
  return obj;
}

function convertResponsiveToPseudoClasses(obj: any, config: any) {
  const newObj = {};
  for (const key in obj) {
    const propName = key;
    const propValue = obj[key];

    if (checkIfPropIsStyle(key, config)) {
      if (Array.isArray(propValue)) {
        const breakPoints = config?.tokens?.breakpoints;
        const breakPointsKeys = Object.keys(breakPoints);
        propValue.forEach((value, index) => {
          //TODO: fix this ts-ignore
          if (newObj[`@${breakPointsKeys[index]}`]) {
            newObj[`@${breakPointsKeys[index]}`][propName] = value;
          } else {
            newObj[`@${breakPointsKeys[index]}`] = { [propName]: value };
          }
        });
      } else if (typeof propValue === 'object' && !propName.startsWith('_')) {
        // const breakPoints = config.tokens.breakpoints;
        // const breakPointsKeys = Object.keys(breakPoints);
        Object.keys(propValue).forEach((value) => {
          //TODO: fix this ts-ignore
          if (newObj[`@${value}`]) {
            newObj[`@${value}`][propName] = propValue[value];
          } else {
            newObj[`@${value}`] = { [propName]: propValue[value] };
          }
        });
      } else if (typeof propValue === 'object') {
        //TODO: fix this ts-ignore
        newObj[key] = convertResponsiveToPseudoClasses(propValue, config);
      } else {
        //TODO: fix this ts-ignore
        newObj[key] = propValue;
      }
    } else {
      newObj[key] = propValue;
      // newObj.props = { ...newObj.props, [key]: propValue };
      // console.log('------', { ...newObj.props, [key]: propValue });
    }
  }
  // console.log('newObj', newObj);
  return newObj;
}

export function convertToSXForStateColorModeMediaQuery(
  inputObj: any,
  _config: any
) {
  const newObj: any = {
    // ...obj,
  };

  const obj = convertResponsiveToPseudoClasses(inputObj, _config);
  const newPseudoClass = renamePseudoClasses(obj);

  for (const key in newPseudoClass) {
    const propName = key;
    //TODO: fix this ts-ignore
    const propValue = obj[key];
    if (
      propName.startsWith('_') ||
      propName.startsWith(':') ||
      propName.startsWith('@')
    ) {
      newObj[propName] = convertToSXForStateColorModeMediaQuery(
        propValue,
        _config
      );
    } else {
      newObj[propName] = propValue;
    }
  }

  return newObj;
}

function addDollarSign(propertyName: any, propValue: any, config: any) {
  if (CSSPropertiesMap.hasOwnProperty(propertyName)) {
    const tokenAvailable = config?.tokens[propertyTokenMap[propertyName]]
      ? config?.tokens[propertyTokenMap[propertyName]][propValue]
      : undefined;
    if (tokenAvailable === undefined) {
      if (
        (typeof propValue === 'number' && !isNaN(propValue)) ||
        (typeof propValue === 'string' && !isNaN(Number(propValue)))
      ) {
        if (
          Number(propValue) < 0 &&
          config?.tokens?.[propertyTokenMap?.[propertyName]]?.[
            String(propValue).slice(1)
          ]
        ) {
          return dontResolveFromToken.includes(propertyName)
            ? Number(propValue)
            : `-$${String(propValue).slice(1)}`;
        }
        return Number(propValue);
      }
      if (typeof propValue === 'string' && propValue.includes(':alpha.')) {
        return `$${propValue}`;
      }
      return propValue;
    } else {
      return `$${propValue}`;
    }
  } else {
    return propValue;
  }
}

export type Dict = Record<string, any>;

export const transparentize =
  (color: string, opacityValue: number) => (theme: Dict) => {
    const raw = getTransparentColor(theme, color);
    return Color(raw).setAlpha(opacityValue).toRgbString();
  };

export const getTransparentColor = (
  theme: Dict,
  color: string,
  fallback?: string
) => {
  const hex = get(theme, `colors.${color}`, color);
  const isValid = Color(hex).isValid();
  return isValid ? hex : fallback;
};

export const getColor = (rawValue: any, scale: any, theme: any) => {
  const alphaMatched =
    typeof rawValue === 'string' ? rawValue?.match(/:alpha\.\d\d?\d?/) : false;

  if (alphaMatched) {
    const colorMatched = rawValue?.match(/^.*?(?=:alpha)/);
    const color = colorMatched ? colorMatched[0] : colorMatched;
    const alphaValue = alphaMatched[0].split('.')[1];
    const alphaFromToken = get(theme.opacity, alphaValue, alphaValue);
    const alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
    const newColor = transparentize(color, alpha)(theme);
    return newColor;
  } else {
    return get(scale, rawValue, rawValue);
  }
};

export function addDollarSignsToProps(obj: any, config: any) {
  const newObj: any = {};
  if (!(Object.keys(obj).length > 0)) {
    return;
  }
  for (const key in obj) {
    let propertyName = key;
    const propValue = obj[key];
    if (config?.aliases?.hasOwnProperty(key)) {
      propertyName = config?.aliases[key];
    }
    if (Array.isArray(propValue)) {
      //TODO: fix this ts-ignore
      const newPropValue = [];
      propValue.forEach((value) => {
        newPropValue.push(addDollarSign(propertyName, value, config));
      });
      //TODO: fix this ts-ignore
      newObj[key] = newPropValue;
    } else if (typeof propValue === 'object' && key.startsWith('_')) {
      newObj[key] = addDollarSignsToProps(obj[key], config);
    } else if (typeof propValue === 'object') {
      const newPropValue = {};
      if (propValue) {
        Object.keys(propValue).forEach((keyProp) => {
          //TODO: fix this ts-ignore
          newPropValue[keyProp] = addDollarSign(
            propertyName,
            propValue[keyProp],
            config
          );
        });
        newObj[key] = newPropValue;
      }
    } else {
      newObj[key] = addDollarSign(propertyName, propValue, config);
    }
  }
  return newObj;
}

export const deepMerge = (target: any = {}, source: any) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

function checkIfPropIsStyle(key: any, theme: any) {
  // console.log(
  //   'CSSPropertiesMap key',
  //   key,
  //   CSSPropertiesMap.hasOwnProperty(key)
  // );
  // console.log(
  //   'propertyTokenMap key',
  //   key,
  //   propertyTokenMap.hasOwnProperty(key)
  // );
  // console.log('theme.aliases key', key, theme.aliases.hasOwnProperty(key));
  // console.log('config', theme);
  if (
    CSSPropertiesMap.hasOwnProperty(key) ||
    propertyTokenMap.hasOwnProperty(key) ||
    theme.aliases.hasOwnProperty(key)
  )
    return true;
  return false;
}

export const transformTheme = (componentTheme: any, config: any) => {
  const { baseStyle, variants, sizes, defaultProps, ...rest } = componentTheme;
  let sxProps = addDollarSignsToProps(rest, config?.theme);

  const transformedTheme: any = {
    variants: {
      variant: {},
      size: {},
    },
    defaultProps: {},
    ...sxProps,
  };

  if (baseStyle) {
    const propsWithDollarSigns = addDollarSignsToProps(
      baseStyle,
      config?.theme
    );
    sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      config
    );
  }
  // const baseStylePropsWithDollarSigns = addDollarSignsToProps(
  //   propsWithDollarSigns,
  //   config
  // );

  // Transforms NativeBase Properties to Gluestack

  // transformedTheme = { ...transformedTheme, ...sxProps };

  // Mapping variants
  if (componentTheme.variants) {
    Object.keys(variants).forEach((variant) => {
      const propsWithDollarSigns = addDollarSignsToProps(
        variants[variant],
        config?.theme
      );
      const sxPropsNew = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        config?.theme
      );
      transformedTheme.variants.variant[variant] = sxPropsNew;
    });
  }

  // Mapping Sizes
  if (componentTheme.sizes) {
    Object.keys(sizes).forEach((size) => {
      const propsWithDollarSigns = addDollarSignsToProps(
        sizes[size],
        config?.theme
      );
      const sxPropsNew = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        config?.theme
      );
      transformedTheme.variants.size[size] = sxPropsNew;
    });
  }

  // Mapping Default Props
  if (componentTheme.defaultProps) {
    const propsWithDollarSigns = addDollarSignsToProps(
      defaultProps,
      config?.theme
    );
    const sxPropsNew = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      config?.theme
    );
    transformedTheme.defaultProps = sxPropsNew;
  }
  return transformedTheme;
};

// Flattens aliases that contains array of strings, like roundedTop or roundedLeft etc.
export function getFlattendMultiAliasesProps(props: any, config: any) {
  const flattenedProps: any = {};
  Object.keys(props).forEach((key) => {
    const propValue = props[key];
    if (config?.aliases?.[key] && Array.isArray(config?.aliases?.[key])) {
      const aliases = config?.aliases[key];
      aliases.forEach((alias: string) => {
        flattenedProps[alias] = propValue;
      });
    } else if (config?.aliases?.[key]) {
      flattenedProps[config?.aliases[key]] = propValue;
    } else {
      flattenedProps[key] = props[key];
    }
  });
  return flattenedProps;
}

export function splitObject(obj: any) {
  const newObj = {};
  const remainingObj = {};

  for (const key in obj) {
    const matchingKey = stackArr.find((stackKey) => key.includes(stackKey));

    if (matchingKey) {
      newObj[key] = obj[key];
    } else if (typeof obj[key] === 'object') {
      const [selected, remaining] = splitObject(obj[key]);
      if (Object.keys(selected).length > 0) {
        newObj[key] = { ...newObj[key], ...selected };
      }
      if (Object.keys(remaining).length > 0) {
        remainingObj[key] = remaining;
      }
    } else {
      remainingObj[key] = obj[key];
    }
  }

  return [newObj, remainingObj];
}

const stackArr = [
  'margin',
  'mx',
  'my',
  'mt',
  'mb',
  'mr',
  'ml',
  'border',
  'flex',
];
