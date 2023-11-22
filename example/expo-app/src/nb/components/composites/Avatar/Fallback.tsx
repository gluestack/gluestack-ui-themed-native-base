import React from 'react';
import { Avatar, HStack } from '@gluestack-ui/themed-native-base';

export const Example = () => {
  return (
    <HStack justifyContent="center" mx={{ base: 'auto', md: '0' }} space={2}>
      <Avatar
        bg="green.500"
        mr="1"
        source={{ uri: 'https://bit.ly/broken-link' }}
      >
        R S
      </Avatar>
      <Avatar bg="amber.500" source={{ uri: 'https://bit.ly/broken-link' }}>
        M R
      </Avatar>
      <Avatar bg="lightBlue.400" source={{ uri: 'https://bit.ly/broken-link' }}>
        - -
      </Avatar>
    </HStack>
  );
};
