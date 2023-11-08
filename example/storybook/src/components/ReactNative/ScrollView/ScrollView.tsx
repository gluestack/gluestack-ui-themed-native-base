import React from 'react';
import {
  ScrollView,
  VStack,
  Center,
  useTheme,
  Heading,
} from '@gluestack-ui/themed-native-base';
import { config } from '@gluestack-ui/themed-native-base';
export const Example = () => {
  return (
    <ScrollView w={['400', '500']} h="80">
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Cyan</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(config.theme.tokens.colors).map((key, index) => {
          if (
            key.includes('primary') &&
            !(
              key.includes('600') ||
              key.includes('700') ||
              key.includes('800') ||
              key.includes('900') ||
              key.includes('950')
            )
          )
            return (
              <Center py="$4" bg={config.theme.tokens.colors[key]}>
                {key}
              </Center>
            );
        })}
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl">Yellow</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(config.theme.tokens.colors).map((key, index) => {
          if (
            key.includes('yellow') &&
            !(
              key.includes('600') ||
              key.includes('700') ||
              key.includes('800') ||
              key.includes('900') ||
              key.includes('950')
            )
          )
            return (
              <Center py="$4" bg={config.theme.tokens.colors[key]}>
                {key}
              </Center>
            );
        })}
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl"> Violet</Heading>
      </Center>
      <VStack flex="1">
        {Object.keys(config.theme.tokens.colors).map((key, index) => {
          if (
            key.includes('violet') &&
            !(
              key.includes('600') ||
              key.includes('700') ||
              key.includes('800') ||
              key.includes('900') ||
              key.includes('950')
            )
          )
            return (
              <Center py="$4" bg={config.theme.tokens.colors[key]}>
                {key}
              </Center>
            );
        })}
      </VStack>
    </ScrollView>
  );
};
