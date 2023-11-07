import React from 'react';

import { Center, Button, Text } from '@gluestack-ui/themed';
import { Modal, VStack, HStack, Heading } from '@gluestack-ui/themed';

const MultipleModalStory = ({ ...props }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        {...props}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space="2" flex={1}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Sub Total</Text>
                <Text color="$blueGray400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Tax</Text>
                <Text color="$blueGray400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Total Amount</Text>
                <Text color="$green500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{ mr: '$3' }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                setShowModal2(true);
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <Modal.Content {...props}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <Center h={100}>
              <Heading>Second Modal</Heading>
            </Center>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setShowModal2(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default MultipleModalStory;
