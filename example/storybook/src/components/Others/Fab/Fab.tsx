import React from 'react';

import { Fab, Box, ThreeDotsIcon } from '@gluestack-ui/themed';

const FabStory = ({
  placement = 'bottom right',
  showLabel = true,
  showIcon = true,
  ...props
}: any) => {
  return (
    <Box bg="$trueGray200" h={300} w={300} borderWidth={1} bgColor="amber.200">
      <Fab
        placement={placement}
        icon={showIcon && ThreeDotsIcon}
        label={showLabel && 'Menu'}
        // colorScheme="pink"
        variant="solid"
        {...props}
      />
    </Box>
  );
};

export default FabStory;
