import React from 'react';

import { config } from '@gluestack-ui/themed';
import { StyledProvider } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/themed';

import { Box } from './Layout/Box/Box';
import { Center } from './Layout/Center/Center';

const TempProvider = createProvider({ StyledProvider }) as any;
TempProvider.displayName = 'Provider';

export const Provider = ({ children }: any) => {
  const nbConfig = {
    // ...config.theme,
    dependencies: {
      // For Expo projects (Bare or managed workflow)
      'linear-gradient': require('expo-linear-gradient').LinearGradient,
      // For non expo projects
      // 'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  return (
    <TempProvider theme={config.theme}>
      <Box
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <Center>{children}</Center>
      </Box>
    </TempProvider>
  );
};
