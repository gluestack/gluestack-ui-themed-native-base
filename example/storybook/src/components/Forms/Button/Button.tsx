import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import { AddIcon, Button } from '@gluestack-ui/themed';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({
  text = 'Button sddd',
  isLoading = false,
  ...props
}: any) => {
  const obj = {
    "_text": {
      "color": "$text.50"
    },
    "_icon": {
      "color": "$text.50"
    },
    "_spinner": {
      "props": {
        "color": "$text.50"
      }
    },
    "bg": "$primary.600",
    ":hover": {
      "backgroundColor": "$primary.700"
    },
    ":active": {
      "backgroundColor": "$primary.800"
    },
    "_dark": {
      "bg": "$primary.600",
      ":hover": {
        "backgroundColor": "$primary.700"
      },
      ":active": {
        "backgroundColor": "$primary.800"
      }
    }
  }
  return (
    <Button
      isLoading={isLoading}
      isLoadingText="loading"
      spinnerPlacement="start"
      // leftIcon={AddIcon}
      // bg="red.500"
      // {...obj}
      {...props}

    >
      {text}
    </Button>
  );
};

export default ButtonStory;
