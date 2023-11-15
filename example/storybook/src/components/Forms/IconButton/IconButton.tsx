import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { IconButton, Icon } from '@gluestack-ui/themed';
import { Entypo } from '@expo/vector-icons';

type MyButtonStory = ComponentStory<typeof IconButton>;

const ButtonStory: MyButtonStory = ({ ...props }: any) => {
  return (
    <IconButton {...props} icon={<Icon as={Entypo} name="minus" size="xs" />} />
  );
};

export default ButtonStory;
