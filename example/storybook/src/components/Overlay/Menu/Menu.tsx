import React from 'react';

import {
  Button,
  GlobeIcon,
  Menu,
  Icon,
  SettingsIcon,
  AddIcon,
  Center,
} from '@gluestack-ui/themed';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ placement = 'bottom' }: any) => {
  return (
    <Center>
      <Menu
        // isOpen={true}
        placement={placement}
        disabledKeys={['Settings']}
        // onSelectionChange={(something) => {
        //   console.log('something', something);
        // }}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return <Button {...triggerProps}>Menu</Button>;
        }}
      >
        <Menu.Item key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Plugins" textValue="Plugins">
          <Icon as={PuzzleIcon} size={16} mr="$2" />
          <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size={16} mr="$2" />
          <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
        </Menu.Item>
      </Menu>
    </Center>
  );
};

export default MenuStory;
