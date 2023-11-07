import React from 'react';

import { Fab, Box, Icon, ThreeDotsIcon } from '@gluestack-ui/themed';
// import { AntDesign } from '@expo/vector-icons';

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
        // icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        icon={showIcon && <Icon color="white" as={ThreeDotsIcon} size="sm" />}
        label={showLabel && 'Menu'}
        // colorScheme="pink"
        variant="solid"
        {...props}
      />
    </Box>
  );
};

export default FabStory;
