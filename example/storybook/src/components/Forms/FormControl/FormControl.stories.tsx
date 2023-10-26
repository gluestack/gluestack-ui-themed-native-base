import type { ComponentMeta } from '@storybook/react-native';
import FormControl from './FormControl';

const FormControlMeta: ComponentMeta<typeof FormControl> = {
  title: 'stories/FORMS/FormControl',
  component: FormControl,
  argTypes: {
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg',],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isInvalid: true,
    isRequired: true,
    isDisabled: false,
    size: 'md',
  },
};

export default FormControlMeta;

export { FormControl };
