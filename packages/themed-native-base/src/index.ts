'use client';
export * from './components';
export * from './hooks';
export { config } from './components/gluestack-ui.config';

export {
  StyledProvider,
  useStyled,
  flush,
  AsForwarder,
} from '@gluestack-style/react';

export { extendTheme } from './utils/extendTheme';
export { createProvider } from '@gluestack-ui/provider';
export { Factory } from './factory';
// export { extendTheme } from './extendTheme';

// modified createIcon will be exported which will not require root as an argument
// export { createIcon } from '@gluestack-ui/icon';

// TODO: remove this with proper functions
const themeTools: any = {};
const useSafeArea: any = {};

export { themeTools, useSafeArea };
