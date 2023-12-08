import React, { createContext, useState } from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { config as defaultConfig } from '../gluestack-ui.config';
import { convertTheme } from '../../utils/extendTheme';
import { deepMerge, platformSpecificSpaceUnits } from '../../utils';

const GluestackUIStyledProvider = createProvider({ StyledProvider });

export const HooksContext = createContext<any>({});

const GluestackUIProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIStyledProvider {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

const NativeBaseProvider = ({
  children,
  config = {},
  theme = {},
  ...props
}: any) => {
  const _enableRem = config?.enableRem ?? false;
  const [colorModeNEW, setColorMode] = useState(
    theme?.config?.initialColorMode ?? 'light'
  );

  const gluestackCompatibleTheme = convertTheme(theme);
  const mergedTheme = theme
    ? deepMerge(deepMerge(defaultConfig.theme, gluestackCompatibleTheme), theme)
    : deepMerge(defaultConfig.theme, gluestackCompatibleTheme);

  const newTheme = React.useMemo(() => {
    if (_enableRem) {
      return platformSpecificSpaceUnits(mergedTheme);
    }
    return mergedTheme;
  }, [_enableRem, mergedTheme]);
  return (
    <HooksContext.Provider
      value={{
        colorMode: colorModeNEW,
        setColorMode: setColorMode,
        config: config?.dependencies ? config.dependencies : {},
      }}
    >
      <GluestackUIProvider
        colorMode={colorModeNEW}
        config={newTheme}
        {...props}
      >
        {children}
      </GluestackUIProvider>
    </HooksContext.Provider>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider, NativeBaseProvider };
