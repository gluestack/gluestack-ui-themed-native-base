import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Avatar, HStack } from '@gluestack-ui/themed';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarStory: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
}: any) => {
  return (
    <HStack space="md" h="100%" justifyContent="center" alignItems="center">
      <Avatar
        size={size}
        source={{
          uri: uri,
        }}
      >
        {fallbackText}
        {badge && <Avatar.Badge />}
      </Avatar>
    </HStack>
  );
};

export default AvatarStory;
