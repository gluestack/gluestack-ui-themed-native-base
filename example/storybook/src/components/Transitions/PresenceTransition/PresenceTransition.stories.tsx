import type { ComponentMeta } from '@storybook/react-native';
import PresenceTransition from './PresenceTransition';

const PresenceTransitionMeta: ComponentMeta<typeof PresenceTransition> = {
  title: 'stories/TRANSITIONS/PresenceTransition',
  component: PresenceTransition,
  argTypes: {},
  args: {},
};

export default PresenceTransitionMeta;

export { PresenceTransition };
