import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Box, useToken } from '@gluestack-ui/themed-native-base';
import { useColorMode } from '@gluestack-style/react';
import { RootStack } from '../../src/navigators/rootNavigator';

const useColorModeValue = (prop1: string, prop2: string) => {
  const colorMode = useColorMode();
  if (colorMode === 'light') return prop1;
  return prop2;
};

export const Root = () => {
  const [lightBg, darkBg] = useToken(
    'colors',
    ['coolGray.50', 'blueGray.900'],
    'blueGray.900'
  );
  const bgColor = useColorModeValue(lightBg, darkBg);
  return (
    <NavigationContainer
      theme={{
        colors: { background: bgColor },
      }}
    >
      <Box
        flex={1}
        w="100%"
        _light={{
          bg: 'coolGray.50',
        }}
        _dark={{
          bg: 'blueGray.900',
        }}
        _web={{
          overflowX: 'hidden',
        }}
      >
        <RootStack />
      </Box>
    </NavigationContainer>
  );
};
