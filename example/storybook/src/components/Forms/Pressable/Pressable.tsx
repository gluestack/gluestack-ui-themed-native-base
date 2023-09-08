import React from 'react';
import { Center, Pressable, Text } from '@gluestack-ui/themed';

const PressableStory = ({ ...props }: any) => {
  return (
    <Pressable
      // eslint-disable-next-line no-console
      onPress={() => console.log('Hello')}
      {...props}
    >
      <Center p={100} bg="primary.500">
        <Text color="white">PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

export default PressableStory;

export { Pressable, Center };
