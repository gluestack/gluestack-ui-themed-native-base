//@ts-nocheck
import React, { useState } from 'react';
import { Alert, Button, Skeleton, Text } from '@gluestack-ui/themed';

function AlertStory({ ...props }: any) {
  // const [state, setState] = useState(true);

  return (
    <>
      <Button>Click to change</Button>
      {/* <Skeleton isLoaded={state} startColor="amber.400" endColor="warning.700"> */}
      {/* <Alert> */}
      {/* <Alert.Icon mr="0" /> */}
      {/* <Text>Selection successfully moved!</Text> */}
      {/* </Alert> */}
      {/* <Alert> */}
      {/* <Alert.Icon mr="0" /> */}
      {/* <Text>Selection successfully moved!</Text> */}
      {/* </Alert> */}
      {/* </Skeleton> */}
    </>
  );
  // // return (
  //   <Alert {...props}>
  //     <Alert.Icon mr="0" />
  //     <Text>Selection successfully moved!</Text>
  //   </Alert>
  // );
}

export default AlertStory;
