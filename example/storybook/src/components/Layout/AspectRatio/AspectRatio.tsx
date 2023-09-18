import { Text, AspectRatio } from '@gluestack-ui/themed';
import React from 'react';

const AspectRatioStory: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  chooseByHeight = true,
  ratio,
  ...props
}: any) => {
  return (
    <AspectRatio
      ratio={ratio}
      bg={`${bg}`}
      h={chooseByHeight && h}
      w={chooseByHeight === false && w}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Text color="white" fontWeight="$bold">
        AspectRatio
      </Text>
    </AspectRatio>
  );
};

export default AspectRatioStory;
