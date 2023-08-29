import React, { useState } from 'react';
import { Button, Popover, Center, Text } from '@gluestack-ui/themed';

const PopoverStory = ({
  showPopover: showPopoverProp = false,
  placement = 'bottom',
}: any) => {
  const [show, setShow] = useState(false);
  return (
    <Center w="90vw" h="90vh" bg="pink">
      <Popover
        offset={10}
        isOpen={showPopoverProp || show}
        onClose={() => {
          setShow(false);
        }}
        placement={placement}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return <Button {...triggerProps}>Popover</Button>;
        }}
      >
        <Popover.Content>
          <Popover.CloseButton />
          <Popover.Header>Welcome!</Popover.Header>
          <Popover.Body>
            Join the product tour and start creating your own checklist. Are you
            ready to jump in?
          </Popover.Body>
          <Popover.Footer justifyContent="space-between">
            <Text>Step 2 of 3</Text>
            {/*
            //@ts-ignore */}
            <Button.Group space="md">
              <Button action="secondary">Back</Button>
              <Button>Next</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Center>
  );
};

export default PopoverStory;
