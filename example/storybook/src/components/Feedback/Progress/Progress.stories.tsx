import type { ComponentMeta } from '@storybook/react-native';
import Progress from './Progress';
import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'stories/FEEDBACK/Progress',
  component: Progress,
  argTypes: {
    value: {
      type: 'number',
      defaultValue: '50',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    colorScheme: { control: 'select', options: colorScheme },
  },
  args: {
    value: 40,
    size: 'md',
    colorScheme: 'primary',
  },
};

export default ProgressMeta;

export { Progress };
