import { useStyled } from '@gluestack-style/react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from '../utils';
function convertStringToNumber(obj: any) {
  const result: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      result[key] = !isNaN(value) ? parseFloat(value) : value;
    }
  }
  return result;
}
export function usePropResolution(props: any) {
  const styledContext = useStyled();
  if (props) {
    let sizeProp = {};
    if (props.size) {
      sizeProp = { height: props.size, width: props.size };
    }
    props = { ...props, ...sizeProp };

    const propsWithDollarSigns = addDollarSignsToProps(
      props,
      styledContext.config
    );
    // console.log(props, propsWithDollarSigns, '===');
    const sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      styledContext.config
    );
    if (!sxProps.hasOwnProperty('sx')) {
      sxProps.sx = {};
    }
    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];

      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });

    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];
      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });
    return convertStringToNumber(sxProps);
    return sxProps;
  }

  return props;
}
