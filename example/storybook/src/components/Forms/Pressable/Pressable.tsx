import React from 'react';
import { Center, Pressable, Text } from '@gluestack-ui/themed';

const PressableStory = ({ ...props }: any) => {
  return (
    <Pressable
      // eslint-disable-next-line no-console
      isHovered
      _hover={{
        _text: {
          color: 'red.500',
        },
      }}
      // isFocusVisible
      // _focusVisible={{
      //   bg: 'red.500',
      // }}
      // onBlur={() => console.log('No')}
      // onPress={() => console.log('Hello')}
      {...props}
    >
      <Center p={100} bg="red.100">
        <Text>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

export default PressableStory;

export { Pressable, Center };
