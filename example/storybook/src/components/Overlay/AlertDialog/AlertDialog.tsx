import React from 'react';
import { AlertDialog, Button, Center } from '@gluestack-ui/themed';

function AlertDialogStory() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  return (
    <Center>
      <Button
        colorScheme="danger"
        onPress={() => setShowAlertDialog(!showAlertDialog)}
      >
        Delete Customer
      </Button>
      <AlertDialog
        // leastDestructiveRef={cancelRef}
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => setShowAlertDialog(!showAlertDialog)}
                // ref={cancelRef}
              >
                Cancel
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => setShowAlertDialog(!showAlertDialog)}
              >
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

export default AlertDialogStory;
