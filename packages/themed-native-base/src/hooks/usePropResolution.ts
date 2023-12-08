import { useStyled } from '@gluestack-style/react';
// import { useMemo } from 'react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
  getFlattendMultiAliasesProps,
  // stableHash,
} from '../utils';

function resolveProps(props: any, flag: any, styledContext: any) {
  if (flag) return props;

  if (props) {
    let sizeProp = {};
    if (
      props.size &&
      ((typeof props.size === 'number' && !isNaN(props.size)) ||
        (typeof props.size === 'string' && !isNaN(Number(props.size))))
    ) {
      sizeProp = {
        height: props.size,
        width: props.size,
      };
    }
    props = { ...props, ...sizeProp };
    props = getFlattendMultiAliasesProps(props, styledContext.config); // Flattens aliases that contains array of strings, like roundedTop or roundedLeft etc.
    const propsWithDollarSigns = addDollarSignsToProps(
      props,
      styledContext.config
    );
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

    return sxProps;
  }
}

export function usePropResolution(props: any, flag: boolean = false) {
  const styledContext = useStyled();
  // const check = stableHash(props);
  // return useMemo(() => {
  return resolveProps(props, flag, styledContext);
  // }, [, props, flag, styledContext]);
}
