import type { ComponentStory } from '@storybook/react-native';
import { Box, Center } from '@gluestack-ui/themed';
import React from 'react';

import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
} from '@gluestack-ui/themed';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({ text = 'Button', ...props }: any) => {
  return (
    <Button
      {...props}
      // bg="blue.500"
      _dark={{
        bg: ['red.200', 'blue', 'green'],
        _hover: {
          bg: 'red.400',
        },
      }}
      // bg={{ base: 'red.200', sm: 'blue', md: 'green' }}
    >
      {text}
    </Button>
  );
};

export default ButtonStory;

export {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  EditIcon,
  ArrowUpIcon,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
  ArrowLeftIcon,
  Center,
};
