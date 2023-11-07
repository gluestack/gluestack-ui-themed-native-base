import type { ComponentStory } from '@storybook/react-native';
import { Button } from '@gluestack-ui/themed';

import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonGroupStory: MyButtonStory = ({ ...props }) => {
  return (
    // @ts-ignore
    <Button.Group {...props}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Button.Group>
  );
};

export default ButtonGroupStory;
