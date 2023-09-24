//@ts-nocheck
import React from 'react';
import { Alert, Text } from '@gluestack-ui/themed';
import {
  AlertCircleIcon,
  InfoIcon,
  CheckCircle2Icon,
  XCircleIcon,
} from 'lucide-react-native';

function AlertStory({ ...props }: any) {
  const Icon = () => {
    if (props.status === 'success') return CheckCircle2Icon;
    if (props.status === 'error') return XCircleIcon;
    if (props.status === 'warning') return AlertCircleIcon;
    return InfoIcon;
  };
  return (
    <Alert {...props}>
      <Alert.Icon mr="0" as={Icon()} />
      <Text>Selection successfully moved!</Text>
    </Alert>
  );
}

export default AlertStory;
