import React from 'react';
import { Button } from '@gluestack-ui/themed';
import { Modal, Center } from '@gluestack-ui/themed';

const ModalStory = ({ showModal: showModalProp = false, ...props }) => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <Center h="100vh" w="100vw" bg="pink">
      <Button
        onPress={() => {
          setShowModal(true);
        }}
      >
        click me
      </Button>
      <Modal
        isOpen={showModal || showModalProp}
        onClose={() => {
          setShowModal(false);
        }}
        {...props}
        finalFocusRef={ref}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Engage with Modals</Modal.Header>
          <Modal.Body>
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              action="positive"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{
                'bg': '$success700',
                ':hover': {
                  bg: '$success800',
                },
                ':active': {
                  bg: '$success900',
                },
                '_dark': {
                  'bg': '$success600',
                  ':hover': {
                    bg: '$success700',
                  },
                  ':active': {
                    bg: '$success800',
                  },
                },
              }}
            >
              Explore
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalStory;
