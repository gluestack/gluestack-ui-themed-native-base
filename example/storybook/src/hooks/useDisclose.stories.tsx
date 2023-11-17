import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';
import {
  Button,
  Center,
  Modal,
} from '@gluestack-ui/themed-native-base/src/components';
// import { Modal } from "native-base"
import { useDisclose } from '@gluestack-ui/themed-native-base/src/hooks';

const Example = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header fontSize="4xl" fontWeight="bold">
            Delete Customer
          </Modal.Header>
          <Modal.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="unstyled" mr="1" onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="error" onPress={onClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={onOpen}>Open Modal</Button>
    </Center>
  );
};

const ButtonMeta: ComponentMeta<any> = {
  title: 'stories/HOOKS/useDisclose',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ButtonMeta;

export { Example };
