import React from 'react';
import {
  Button,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';

const ToastStory = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          duration: null,
          render: ({ id }) => {
            return (
              <>
                <Toast nativeID={id} {...props}>
                  <VStack space="xs">
                    <Toast.Title>Hello World Toast </Toast.Title>
                    <Toast.Description>
                      Please create a support ticket from the support page
                    </Toast.Description>
                  </VStack>
                  <Pressable onPress={() => toast.close(id)}>
                    <Icon as={CloseIcon} color="$coolGray50" />
                  </Pressable>
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
