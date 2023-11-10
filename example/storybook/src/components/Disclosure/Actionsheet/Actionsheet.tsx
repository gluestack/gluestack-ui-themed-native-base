import React, { useState } from 'react';
import { Actionsheet, Box, Text, Button } from '@gluestack-ui/themed';

function ActionsheetStory({
  showActionsheet: _showActionsheetProp = true,
}: any) {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [hideDragIndicator, setHideDragIndicator] = useState(true);

  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Button
        onPress={() => {
          setShowActionsheet(!showActionsheet);
        }}
      >
        Open
      </Button>
      <Button
        onPress={() => {
          setHideDragIndicator(!hideDragIndicator);
        }}
      >
        {`${hideDragIndicator ? 'show' : 'hide'} DragIndicator`}
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        hideDragIndicator={hideDragIndicator}
        disableOverlay={false}
      >
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
          <Actionsheet.Item isLoading _text={{ color: 'red.500' }}>
            Delete
          </Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item isLoading>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ActionsheetStory;
