import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeBaseProvider as NBGUIProvider } from '@gluestack-ui/themed-native-base';
import { BaseTheme } from './src/theme';
import config from './nativebase.config';
import { Root } from './src/components/RootComponent';

export default function App() {
  return (
    <NBGUIProvider theme={BaseTheme} config={config} colorMode="light">
      <Root />
    </NBGUIProvider>
  );
}
