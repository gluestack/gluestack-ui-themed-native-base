import React from 'react';
import { config } from '@gluestack-ui/themed';
import { StyledProvider, NativeBaseProvider } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';

import { Center } from './Layout/Center/Center';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  const nbConfig = {
    ...config.theme,
    dependencies: {
      // For Expo projects (Bare or managed workflow)
      'linear-gradient': require('expo-linear-gradient').LinearGradient,
      // For non expo projects
      // 'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  return (
    <NativeBaseProvider config={config.theme} {...props}>
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
          // w: "50%"
        }}
        {...props}
      >
        <Center h="100%">
          <Box justifyContent="center" alignItems="center">
            {children}
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default Wrapper;
