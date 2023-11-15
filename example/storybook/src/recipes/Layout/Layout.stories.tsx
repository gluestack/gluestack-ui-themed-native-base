import type { ComponentMeta } from '@storybook/react-native';
import AppDrawer from './AppDrawer';
import Footer from './Footer';
const DividerMeta: ComponentMeta<typeof AppDrawer> = {
  title: 'stories/RECIPES/Layout',
  component: AppDrawer,
};

export default DividerMeta;

export { AppDrawer, Footer };
