import React from 'react';
import { Icon, Heading, Center, VStack } from '@gluestack-ui/themed-native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  const sizes = ['10', '50px', '2xl'];
  return (
    <Center>
      <Heading mb="10">Sizes</Heading>
      <VStack space={4} justifyContent="center">
        {sizes.map((size) => (
          <Icon
            as={Ionicons}
            name="md-checkmark-circle"
            alignSelf="center"
            size={size}
          />
        ))}
      </VStack>
    </Center>
  );
};
