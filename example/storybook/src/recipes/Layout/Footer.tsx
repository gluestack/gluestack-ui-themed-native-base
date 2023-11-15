import React from 'react';
import {
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from '@gluestack-ui/themed';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function Example() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      maxW="300px"
      alignSelf="center"
    >
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={MaterialCommunityIcons}
              name={selected === 0 ? 'home' : 'home-outline'}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={MaterialIcons}
              name="search"
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={MaterialCommunityIcons}
              name={selected === 2 ? 'cart' : 'cart-outline'}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={MaterialCommunityIcons}
              name={selected === 3 ? 'account' : 'account-outline'}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
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
