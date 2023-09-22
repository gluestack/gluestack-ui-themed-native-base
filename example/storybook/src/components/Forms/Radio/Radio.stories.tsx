import type { ComponentMeta } from '@storybook/react-native';
import RadioStory from './Radio';
import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils';

const RadioMeta: ComponentMeta<typeof RadioStory> = {
  title: 'stories/FORMS/Radio',
  component: RadioStory,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    colorScheme: {
      control: 'select',
      description: 'The colorScheme of button.',
      options: colorScheme,
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    isInvalid: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    isReadOnly: {
      type: 'boolean',
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    colorScheme: 'primary',
    isDisabled: false,
    isReadOnly: false,
  },
};

export default RadioMeta;

export { RadioStory };
