import type { ComponentMeta } from '@storybook/react-native';
import Checkbox from './Checkbox';
import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/FORMS/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
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
    isDisabled: false,
    isReadOnly: false,
    colorScheme: 'primary',
  },
};

export default CheckboxMeta;
export { Checkbox };
