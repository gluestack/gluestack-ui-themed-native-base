import React from 'react';
import type { ComponentStory } from '@storybook/react-native';

import { HStack } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonIsLoadingExample: MyButtonStory = ({}) => {
  return (
    <HStack space="md">
      <Button isLoading isLoadingText="loading">
        something
      </Button>
    </HStack>
  );
};

export default ButtonIsLoadingExample;
