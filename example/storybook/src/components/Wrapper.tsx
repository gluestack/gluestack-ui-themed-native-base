import React from 'react';
import { config } from '@gluestack-ui/themed';
import { StyledProvider, NativeBaseProvider } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';

import { Center } from './Layout/Center/Center';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <NativeBaseProvider theme={config.theme} {...props}>
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
        }}
        {...props}
      >
        <Center h="100%">{children}</Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default Wrapper;
