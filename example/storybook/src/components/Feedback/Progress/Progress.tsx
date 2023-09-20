import React from 'react';

import { Box, Progress } from '@gluestack-ui/themed';

const ProgressStory = ({ value = 50, ...props }: any) => {
  return (
    <Box w="70%">
      <Progress value={value} {...props} />
    </Box>
  );
};

export default ProgressStory;
