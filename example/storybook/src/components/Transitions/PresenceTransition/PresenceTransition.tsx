import React from 'react';
import { Center, Button, PresenceTransition } from '@gluestack-ui/themed';

function SkeletonStory() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Center>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 250,
          },
        }}
      >
        <Center
          mt="7"
          bg="teal.500"
          rounded="md"
          w="200"
          h="100"
          _text={{
            color: 'white',
          }}
        >
          Fade
        </Center>
      </PresenceTransition>
    </Center>
  );
}

export default SkeletonStory;
