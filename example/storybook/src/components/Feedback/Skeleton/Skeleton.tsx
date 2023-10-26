import React from 'react';
import {
  Center,
  VStack,
  Skeleton,
  HStack,
  // Alert,
  // Text,
} from '@gluestack-ui/themed';

function AlertStory() {
  return (
    <Center w="100%">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={6}
        rounded="md"
        alignItems="center"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
      >
        <Skeleton h="40" />
        <Skeleton
          borderWidth={1}
          borderColor="coolGray.200"
          endColor="warmGray.50"
          size={20}
          rounded="full"
          mt="-70"
        />
        <HStack space="2">
          <Skeleton size={20} rounded="full" />
          <Skeleton size={20} rounded="full" />
          <Skeleton size={20} rounded="full" />
          <Skeleton size={20} rounded="full" />
          <Skeleton size={20} rounded="full" />
        </HStack>
        <Skeleton.Text lines={6} alignItems="center" px="12" />
        <Skeleton mb="3" w="40" rounded="20" />
      </VStack>
    </Center>
  );
}

export default AlertStory;
