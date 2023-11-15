import React from 'react';
import {
  IconButton,
  Text,
  FlatList,
  Icon,
  Box,
  Center,
} from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';

function AppDrawer() {
  const icons = [
    {
      name: 'bolt',
      bg: 'amber.600',
    },
    {
      name: 'build',
      bg: 'emerald.600',
    },
    {
      name: 'cloud',
      bg: 'blue.600',
    },
    {
      name: 'delivery-dining',
      bg: 'orange.600',
    },
    {
      name: 'favorite',
      bg: 'rose.600',
    },
    {
      name: 'music-note',
      bg: 'violet.600',
    },
    {
      name: 'invert-colors-on',
      bg: 'lime.600',
    },
    {
      name: 'navigation',
      bg: 'indigo.600',
    },
    {
      name: 'settings',
      bg: 'pink.600',
    },
    {
      name: 'sports-esports',
      bg: 'coolGray.600',
    },
    {
      name: 'shield',
      bg: 'darkBlue.600',
    },
    {
      name: 'photo-camera',
      bg: 'fuchsia.600',
    },
    {
      name: 'network-wifi',
      bg: 'amber.500',
    },
    {
      name: 'nightlight-round',
      bg: 'violet.800',
    },
    {
      name: 'flight',
      bg: 'blue.800',
    },
    {
      name: 'extension',
      bg: 'indigo.600',
    },
    {
      name: 'duo',
      bg: 'orange.600',
    },
    {
      name: 'album',
      bg: 'rose.600',
    },
    {
      name: 'access-alarm',
      bg: 'emerald.600',
    },
    {
      name: 'forum',
      bg: 'indigo.600',
    },
  ];
  return (
    <FlatList
      numColumns={4}
      m={'-8px'}
      data={icons}
      renderItem={({ item }) => {
        return (
          // <IconButton
          //   m={'8px'}
          //   borderRadius="full"
          //   bg={item.bg}
          //   variant="solid"
          //   p="3"
          //   icon={
          <Icon color={item.bg} name={item.name} as={MaterialIcons} size="sm" />
          //   }
          // />
        );
      }}
    />
  );
}

function Example() {
  return (
    <Box alignItems="center" flex={1}>
      <AppDrawer />
      {/* <Text>Hello</Text> */}
    </Box>
  );
}

export default () => {
  return (
    <Center flex={1} px="3">
      <Example />
    </Center>
  );
};
