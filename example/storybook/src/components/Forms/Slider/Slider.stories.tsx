import type { ComponentMeta } from '@storybook/react-native';
import Slider from './Slider';
import { colorScheme } from '../../../../../../packages/themed-native-base/src/utils/NBsupport';

const SliderMeta: ComponentMeta<typeof Slider> = {
  title: 'stories/FORMS/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: { type: 'number', min: 1, max: 100 },
    },
    //@ts-ignore
    colorScheme: {
      control: 'select',
      description: 'The action of button.',
      options: colorScheme,
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the slider.',
      defaultValue: 'md',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the slider.',
      defaultValue: 'horizontal',
    },
    isReversed: {
      control: 'boolean',
      defaultValue: false,
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  //@ts-ignore
  args: { value: 30, size: 'md' },
};

export default SliderMeta;

export { Slider };
