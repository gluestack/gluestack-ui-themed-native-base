import { useStyled } from '@gluestack-style/react';
import { useMemo } from 'react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
  getFlattendMultiAliasesProps,
} from '../utils';

function resolveProps(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const styledContext = useStyled();

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
        fontSize: props.size,
      };
    }
    props = { ...sizeProp, ...props };
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

export function usePropResolution(props: any) {
  return useMemo(() => {
    return resolveProps(props);
  }, [props]);
}
