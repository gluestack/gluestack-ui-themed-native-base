import React, { useMemo } from 'react';

import {
  Actionsheet,
  Box,
  Button,
  Center,
  Text,
  useDisclose,
} from '@gluestack-ui/themed';
// import { useEffect } from 'react';

function ActionsheetExample(
  {
    // showActionsheet: showActionsheetProp = true,
    // ...props
  }
) {
  // const [showActionsheet, setShowActionsheet] = React.useState(
  //   props.showActionsheet
  // );

  // useEffect(() => {
  //   setShowActionsheet(props.showActionsheet);
  // }, [props.showActionsheet]);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              Albums
            </Text>
          </Box>
          {data.map((item) => {
            return <Actionsheet.Item>{JSON.stringify(item)}</Actionsheet.Item>;
          })}
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
