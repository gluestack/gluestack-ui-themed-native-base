import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Button, Icon } from '@gluestack-ui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      // _icon={{ color: 'red.500' }}
      // isPressed
      _focus={{
        // bg: 'red.500',
        _text: {
          color: 'red.500',
        },
        _icon: {
          color: 'red.500',
        },
      }}
      leftIcon={<Icon as={MaterialCommunityIcons} name="chess-knight" />}
      // variant="outline"
      // _text={{ color: 'red.500' }}
    >
      {text}
    </Button>
  );
};

export default ButtonStory;
