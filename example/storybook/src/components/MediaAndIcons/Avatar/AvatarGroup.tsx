// @ts-nocheck
import type { ComponentStory } from '@storybook/react-native';

import {
  HStack,
  Avatar,
  // AvatarGroup,
  // AvatarBadge,
  // AvatarFallbackText,
  // AvatarImage,
} from '@gluestack-ui/themed';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarGroupExample: CustomAvatarStory = ({ size = 'md', badge }: any) => {
  return (
    <HStack space="md" h="100%" justifyContent="center" alignItems="center">
      <Avatar.Group max={0}>
        <Avatar
          size={size}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        >
          John Doe
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar
          size={size}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        >
          John Doe
        </Avatar>
        <Avatar
          size={size}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        >
          John Doe
        </Avatar>
        <Avatar
          size={size}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b2933',
          }}
        >
          John Doe
        </Avatar>
      </Avatar.Group>
    </HStack>
  );
};

export default AvatarGroupExample;
