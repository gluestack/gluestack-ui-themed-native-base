import React from 'react';
import {
  Button,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  Pressable,
  HStack,
} from '@gluestack-ui/themed';

const ToastStory = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          title: 'hi',
          description: 'Bhaaagooooo',
          placement: placement,
          duration: null,
          render: ({ id }) => {
            return (
              <>
                <Toast
                  nativeID={id}
                  {...props}
                  // sx={{ _title: { color: 'red' } }}
                >
                  <HStack space="md">
                    <VStack space="xs">
                      <Toast.Title>Hello World Toast </Toast.Title>
                      <Toast.Description>
                        Please create a support ticket from the support page
                      </Toast.Description>
                    </VStack>
                    <Pressable onPress={() => toast.close(id)}>
                      <Icon as={CloseIcon} color="$coolGray50" />
                    </Pressable>
                  </HStack>
                </Toast>
              </>
            );
          },
        });
      }}
    >
      Press Me
    </Button>
  );
};

export default ToastStory;
