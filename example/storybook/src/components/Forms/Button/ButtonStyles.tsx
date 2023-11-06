import type { ComponentStory } from '@storybook/react-native';
import { Button } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';

import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStylesExample: MyButtonStory = ({}) => {
  const variants = ['solid', 'outline', 'link'];
  return (
    <VStack>
      {variants.map((variant: any) => {
        return (
          <Button variant={variant} mt="$4">
            {variant}
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonStylesExample;
