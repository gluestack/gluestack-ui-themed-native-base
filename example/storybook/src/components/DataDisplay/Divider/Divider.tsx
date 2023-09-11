import React from 'react';
import { Text, Divider, VStack, HStack } from '@gluestack-ui/themed';

const DividerStory = () => {
  return (
    <VStack space="md" justifyContent="center" alignItems="center">
      <HStack h={40} justifyContent="center" alignItems="center">
        <Text>Simple</Text>
        <Divider orientation="vertical" mx="$3" />
        <Text>Easy</Text>
        <Divider m="$3" orientation="vertical" />
        <Text>Beautiful</Text>
      </HStack>
      <VStack w="100%" justifyContent="center" alignItems="center">
        <Text>Firefox</Text>
        <Divider thickness={10} orientation="horizontal" my="$3" />
        <Text>Chrome</Text>
      </VStack>
    </VStack>
  );
};

export default DividerStory;
