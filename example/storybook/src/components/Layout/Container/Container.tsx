import { Text, Container } from '@gluestack-ui/themed';
import React from 'react';

const ContainerStory: any = ({
  // bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Container
      {...props}
      // bg={`${bg}`}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="$bold">
        Container
      </Text>
    </Container>
  );
};

export default ContainerStory;
