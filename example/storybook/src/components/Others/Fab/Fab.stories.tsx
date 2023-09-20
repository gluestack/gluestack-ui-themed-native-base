import type { ComponentMeta } from '@storybook/react-native';
import Fab from './Fab';
import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils';

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'stories/OTHERS/Fab',
  component: Fab,
  argTypes: {
    colorScheme: {
      control: 'select',
      description: 'The action of button.',
      options: colorScheme,
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    placement: {
      control: 'select',
      options: [
        'top right',
        'top left',
        'bottom right',
        'bottom left',
        'top center',
        'bottom center',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    showLabel: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
  args: {
    placement: 'bottom right',
    showLabel: true,
    showIcon: true,
    size: 'md',
    colorScheme: 'primary',
  },
};

export default FabMeta;

export { Fab };
