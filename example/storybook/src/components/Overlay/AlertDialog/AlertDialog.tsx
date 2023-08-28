//@ts-nocheck
import React, { useState } from 'react';
import {
  CloseIcon,
  AlertDialog,
  Button,
  // ButtonText,
  Text,
  Center,
  Icon,
  Heading,
  AlertCircleIcon,
  CheckCircleIcon,
  HStack,
} from '@gluestack-ui/themed';

import { AlertTriangleIcon } from 'lucide-react-native';

const AlertDialogStory = ({
  showAlertDialog: showAlertDialogProp = false,
  ...props
}) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <Center h="100vh" w="100vw" bg="pink">
      <Button
        onPress={() => {
          setShowAlertDialog(true);
        }}
      >
        click me
      </Button>
      <AlertDialog
        isOpen={showAlertDialog || showAlertDialogProp}
        onClose={handleClose}
        {...props}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Return Policy</AlertDialog.Header>
          <AlertDialog.Body>
            Whoa, slow down there! This modal is like a red light at an
            intersection, reminding you to stop and think before you proceed. Is
            deleting this folder the right choice?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button
              variant="solid"
              action="secondary"
              onPress={handleClose}
              mr="$3"
            >
              Cancel
            </Button>
            <Button action="negative" onPress={handleClose}>
              Delete
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default AlertDialogStory;

export {
  AlertDialog,
  Button,
  // ButtonText,
  Text,
  CloseIcon,
  Center,
  Heading,
  Icon,
  AlertCircleIcon,
  HStack,
  AlertTriangleIcon,
  CheckCircleIcon,
};
