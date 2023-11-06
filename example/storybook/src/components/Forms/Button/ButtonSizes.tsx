import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button, VStack } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizesExample: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <VStack justifyContent="center" alignItems="center">
      {sizes.map((size: any) => {
        return (
          <Button mt="$4" size={size} key={size}>
            Button
            {/* <Button.Icon as={AddIcon} ml="$2" /> */}
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonSizesExample;
