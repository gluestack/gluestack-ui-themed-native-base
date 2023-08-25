import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import {
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Icon,
  Heading,
  Text,
  AccessibleAvatar,
} from '@gluestack-ui/themed';
import { User } from 'lucide-react-native';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarStory: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText,
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
        {badge && <Avatar.Badge bg="red" />}
      </Avatar>
      <AccessibleAvatar size={size}>
        <AccessibleAvatar.Image
          source={{
            uri: uri,
          }}
        />
        <AccessibleAvatar.FallbackText>
          {fallbackText}
        </AccessibleAvatar.FallbackText>
        <Avatar.Badge />
      </AccessibleAvatar>
    </HStack>
  );
};

export default AvatarStory;

export {
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Heading,
  User,
  Text,
};
