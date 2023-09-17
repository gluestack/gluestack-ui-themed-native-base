import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { AddIcon, Button } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({
  text = 'Button',
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
    >
      {text}
    </Button>
  );
};

export default ButtonStory;
