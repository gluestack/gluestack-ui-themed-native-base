import React from 'react';
import { Box } from 'native-base';

export const Example = () => {
  return (
    <Box
      borderColor="transparent"
      _light={{
        borderBottomColor: 'gray.600',
      }}
      _dark={{
        borderBottomColor: 'gray.100',
      }}
      w="50%"
    >
      <Box
        _light={{
          bg: 'gray.600',
        }}
        _dark={{
          bg: 'gray.100',
        }}
        rounded="25"
        h="11px"
        mb={1}
        w="100%"
      />
    </Box>
  );
};
