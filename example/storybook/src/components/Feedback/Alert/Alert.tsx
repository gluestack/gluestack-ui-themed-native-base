//@ts-nocheck
import React from 'react';
import { Alert, Text } from '@gluestack-ui/themed';

function AlertStory({ ...props }: any) {
  return (
    <Alert {...props}>
      <Alert.Icon mr="0" />
      <Text>Selection successfully moved!</Text>
    </Alert>
  );
}

export default AlertStory;
