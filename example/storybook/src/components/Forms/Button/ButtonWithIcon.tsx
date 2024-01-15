import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon, VStack } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed-native-base';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <VStack space="6">
      <Button leftIcon={<Icon as={InfoIcon} mr="$2" />}>LeftIcon</Button>
      <Button variant="solid" rightIcon={<Icon as={AddIcon} ml="$2" />}>
        RightIcon
      </Button>
    </VStack>
  );
};

export default ButtonWithIconsTemp;
