import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { AddIcon, Button } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({
  text = 'Button sddd',
  isLoading = false,
  ...props
}: any) => {
  return (
    <Button
      {...props}
      isLoading={isLoading}
      isLoadingText="loading"
      spinnerPlacement="start"
      leftIcon={AddIcon}
      bg={'red.500'}
    >
      {text}
    </Button>
  );
};

export default ButtonStory;
