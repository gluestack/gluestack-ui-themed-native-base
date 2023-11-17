import React from 'react';
import { Center } from '@gluestack-ui/themed';

import { Alert, Text } from '@gluestack-ui/themed';
import {
  AlertCircleIcon,
  InfoIcon,
  CheckCircle2Icon,
  XCircleIcon,
} from 'lucide-react-native';

function AlertVariants({ variant }: any) {
  return (
    <Center>
      <Alert status="info" variant={variant} mb={4}>
        <Alert.Icon as={InfoIcon} mr="3" />
        <Text>
          Unlock the power of knowledge with the following information.
        </Text>
      </Alert>
      <Alert status="success" variant={variant} mb={4}>
        <Alert.Icon as={CheckCircle2Icon} mr="3" />
        <Text>
          Boom! You did it! Please take a moment to pat yourself on the back.
          You've earned it! Boom! You did it! Please take a moment to pat
          yourself on the back. You've earned it!
        </Text>
      </Alert>
      <Alert status="error" variant={variant} mb={4}>
        <Alert.Icon as={XCircleIcon} mr="$3" />
        <Text>
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas
          are already on the case. Please hold tight while we fix the issue
        </Text>
      </Alert>
      <Alert status="warning" variant={variant} mb={4}>
        <Alert.Icon as={AlertCircleIcon} mr="$3" />
        <Text>
          Warning: Reading the following content may cause spontaneous outbursts
          of 'aha!' moments
        </Text>
      </Alert>
    </Center>
  );
}

export default AlertVariants;
export { Alert };
