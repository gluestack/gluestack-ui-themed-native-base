import React from 'react';

import {
  // Button,
  // GlobeIcon,
  Menu,
  // Icon,
  // SettingsIcon,
  // AddIcon,
  // Center,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
// import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ _placement = 'bottom' }: any) => {
  return (
    <Menu
      w="190"
      // trigger={(triggerProps) => {
      //   return (
      //     <Pressable accessibilityLabel="More options menu" {...triggerProps}>
      //       <HamburgerIcon />
      //     </Pressable>
      //   );
      // }}
      // trigger={({ ...triggerProps }) => {
      //   return <Button {...triggerProps}>Menu</Button>;
      // }}
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Text>Hello</Text>
          </Pressable>
        );
      }}
    >
      <Menu.Item>Arial</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Poppins</Menu.Item>
      <Menu.Item>SF Pro</Menu.Item>
      <Menu.Item>Helvetica</Menu.Item>
      <Menu.Item isDisabled>Sofia</Menu.Item>
      <Menu.Item>Cookie</Menu.Item>
    </Menu>
  );
};

export default MenuStory;
