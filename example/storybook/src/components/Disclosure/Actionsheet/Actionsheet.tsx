import React, { useState } from 'react';
import {
  Actionsheet,
  Box,
  // ActionsheetBackdrop,
  // ActionsheetContent,
  // ActionsheetDragIndicator,
  // ActionsheetDragIndicatorWrapper,
  // ActionsheetItem,
  // ActionsheetItemText,
  // useDisclose,
  Text,
  Button,
} from '@gluestack-ui/themed';

function ActionsheetStory({
  showActionsheet: _showActionsheetProp = true,
}: any) {
  const [showActionsheet, setShowActionsheet] = useState(false);

  const handleClose = () => setShowActionsheet(false);
  // const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button
        onPress={() => {
          setShowActionsheet(!showActionsheet);
        }}
      >
        Open
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
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
  // return (
  //   <Actionsheet
  //     isOpen={showActionsheet || showActionsheetProp}
  //     onClose={handleClose}
  //     {...props}
  //   >
  //     <ActionsheetBackdrop />
  //     <ActionsheetContent>
  //       <ActionsheetDragIndicatorWrapper>
  //         <ActionsheetDragIndicator />
  //       </ActionsheetDragIndicatorWrapper>
  //       <ActionsheetItem onPress={handleClose} isDisabled>
  //         <ActionsheetItemText>Delete</ActionsheetItemText>
  //       </ActionsheetItem>
  //       <ActionsheetItem onPress={handleClose}>
  //         <ActionsheetItemText>Share</ActionsheetItemText>
  //       </ActionsheetItem>
  //       <ActionsheetItem onPress={handleClose}>
  //         <ActionsheetItemText>Play</ActionsheetItemText>
  //       </ActionsheetItem>
  //       <ActionsheetItem onPress={handleClose}>
  //         <ActionsheetItemText>Favourite</ActionsheetItemText>
  //       </ActionsheetItem>
  //       <ActionsheetItem onPress={handleClose}>
  //         <ActionsheetItemText>Cancel</ActionsheetItemText>
  //       </ActionsheetItem>
  //     </ActionsheetContent>
  //   </Actionsheet>
  // );
}

export default ActionsheetStory;
