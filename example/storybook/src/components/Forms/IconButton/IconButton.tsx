import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { AddIcon, IconButton } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof IconButton>;

const ButtonStory: MyButtonStory = ({ ...props }: any) => {
  return <IconButton {...props} icon={<AddIcon />} />;
};

export default ButtonStory;
