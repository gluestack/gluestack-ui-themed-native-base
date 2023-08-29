import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Button } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({ text = 'Button', ...props }: any) => {
  return <Button {...props}>{text}</Button>;
};

export default ButtonStory;
