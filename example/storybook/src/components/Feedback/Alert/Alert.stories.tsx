import type { ComponentMeta } from '@storybook/react-native';
import Alert from './Alert';
import AlertVariants from './Variants';

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'stories/FEEDBACK/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'solid',
        'subtle',
        'left-accent',
        'outline',
        'outline-light',
        'top-accent',
      ],
    },
    status: {
      control: 'select',
      options: ['info', 'error', 'warning', 'muted', 'success'],
    },
  },
  args: {
    status: 'success',
    variant: 'solid',
  },
};

export default AlertMeta;

export { Alert, AlertVariants };
