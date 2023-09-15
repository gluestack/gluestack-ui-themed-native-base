import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Button } from '@gluestack-ui/themed';

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
    >
      {text}
    </Button>
  );
};

export default ButtonStory;
