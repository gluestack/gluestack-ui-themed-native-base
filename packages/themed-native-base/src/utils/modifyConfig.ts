// @ts-nocheck

import cloneDeep from 'lodash.clonedeep';

// main modification function
export function modifyConfig(config: any) {
  const tokens = cloneDeep(config.tokens);
  modifyColor(tokens.colors);
  modifyGlobalVariants(tokens);
  tokens.aliases = cloneDeep(config.aliases);
  return tokens;
}

// change architecture of colors
function modifyColor(obj: any) {
  for (const key in obj) {
    if (/\.\d+/.test(key)) {
      const colorAlias = key.split('.');
      const colorScheme = colorAlias[0];
      const shade = colorAlias.slice(1).join('.');
      if (!obj[colorScheme]) {
        obj[colorScheme] = {};
      }
      obj[colorScheme] = { ...obj[colorScheme], [shade]: obj[key] };
      delete obj[key];
    }
  }
}

// modify global variants
function modifyGlobalVariants(obj: any) {
  for (const key in obj.globalStyle) {
    const globalVariant = key.split('.')[1];
    obj[globalVariant] = obj.globalStyle[key];
  }
  delete obj.globalStyle;
}
