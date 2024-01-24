import React, { createContext, useContext, useState } from 'react';
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
  disableContrastText,
  ...props
}: any) => {
  const _enableRem = config?.enableRem ?? false;
  const { colorMode: colorModeFromParent } =
    useContext(HooksContext) ?? undefined;
  const [colorModeNEW, setColorMode] = useState(
    colorModeFromParent ?? theme?.config?.initialColorMode ?? 'light'
  );
  // delete props.colorMode;

  const toggleColorMode = () => {
    setColorMode((prev: any) => (prev === 'light' ? 'dark' : 'light'));
  };

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
        toggleColorMode: toggleColorMode,
        config: config?.dependencies ? config.dependencies : {},
        disableContrastText: disableContrastText,
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
