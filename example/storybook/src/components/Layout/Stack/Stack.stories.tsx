import type { ComponentMeta } from '@storybook/react-native';
import Stack from './Stack';

const StackMeta: ComponentMeta<typeof Stack> = {
  title: 'stories/LAYOUT/Stack',
  component: Stack,
  argTypes: {
    // space: {
    //   control: 'select',
    //   options: ['xs', 'sm', 'md', 'lg', 'xl'],
    // },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    space: '$10',
    direction: 'row',
    reversed: false,
  },
};

export default StackMeta;

export { Stack };
