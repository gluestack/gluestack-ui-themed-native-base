import React from 'react';
import { Button, Center, Tooltip } from '@gluestack-ui/themed';

const TooltipStory = ({
  showTooltip: showTooltipProp = false,
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  2;
  return (
    <Center h="100vh" w="100vw">
      <Tooltip
        offset={10}
        placement={placement}
        label={text}
        isOpen={showTooltipProp}
      >
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
};

export default TooltipStory;
