import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import IconButton from './IconButton';
import DocsContainer from '@storybook/addon-docs';

import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils';

const ButtonMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/IconButton',
  component: IconButton,
  args: {
    colorScheme: 'primary',
    variant: 'solid',
    size: 'md',
    isLoading: false,
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      description: 'The action of button.',
      options: colorScheme,
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: 'select',
      options: ['link', 'outline', 'solid', 'ghost', 'subtle'],
      description: 'The style of button.',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isLoading: {
      constrol: 'select',
      options: [true, false],
    },
  },
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ButtonMeta;

export { IconButton };
