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
      _pressed={{
        bg: 'yellow.500',
      }}
      isLoadingText="loading"
      spinnerPlacement="start"
      // _icon={{ color: 'red.500' }}
      leftIcon={<AddIcon />}
<<<<<<< HEAD
      _loading={{
        bg: 'red.600',
        _text: {
          color: 'green.500',
        },
      }}
      _spinner={{
        color: 'blue.900',
      }}
      // _icon={{ color: 'green.500' }}
      _hover={{ bg: 'red.800' }}
=======
>>>>>>> db58e581 (fix: button)
      // bg="red.500"
      // _text={{ color: "$white" }}
    >
      {text}
    </Button>
  );
};

export default ButtonStory;
