import React, { useState } from 'react';
import {
  Actionsheet,
  Box,
  Text,
  Button,
  useDisclose,
} from '@gluestack-ui/themed';

function ActionsheetStory({
  showActionsheet: _showActionsheetProp = true,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
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
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ActionsheetStory;
