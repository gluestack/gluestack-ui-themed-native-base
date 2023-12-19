import {
  useStyled,
  useBreakpointValue as useBreakpointValueStyled,
} from '@gluestack-style/react';

export const useBreakpointValue = (
  breakpointValue: Array<string> | Record<string, any>
) => {
  let breakPointToResolve: any;

  const styleTheme = useStyled();
  const breakpoints = Object.keys(styleTheme?.config?.tokens?.breakpoints);

  if (
    typeof breakpointValue === 'string' ||
    typeof breakpointValue === 'number' ||
    breakpointValue === undefined ||
    breakpointValue === null
  ) {
    return breakpointValue;
  }

  if (
    Array.isArray(breakpointValue) ||
    (typeof breakpointValue === 'object' && breakpointValue !== null)
  ) {
    if (Array.isArray(breakpointValue)) {
      breakPointToResolve = {};
      breakpointValue.forEach((value, index) => {
        breakPointToResolve[breakpoints[index]] = value;
      });
    } else {
      breakPointToResolve = breakpointValue;
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useBreakpointValueStyled(breakPointToResolve);
};
