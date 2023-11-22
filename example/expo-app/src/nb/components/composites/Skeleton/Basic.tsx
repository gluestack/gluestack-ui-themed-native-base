import React from 'react';
import { Skeleton, VStack, Center } from '@gluestack-ui/themed-native-base';
import { useStyled, useToken } from '@gluestack-ui/themed-native-base';
export const Example = () => {
  console.log('styledObject', useStyled());
  console.log('red.600: ', useToken('colors', 'red.600'));
  console.log('lightText: ', useToken('colors', 'lightText'));
  return (
    <Center w="100%">
      <VStack
        w="90%"
        maxW="3.5"
        borderWidth="2"
        // space={8}
        overflow="hidden"
        rounded="md"
        // _dark={{ borderColor: 'coolGray.500' }}
        // _light={{ borderColor: 'coolGray.200' }}
      >
        <Center/>
        {/* <Skeleton /> */}
        {/* <Skeleton.Text px="4" /> */}
        {/* <Skeleton px="4" my="4" rounded="md" startColor="primary.100" /> */}
      </VStack>
    </Center>
  );
};
