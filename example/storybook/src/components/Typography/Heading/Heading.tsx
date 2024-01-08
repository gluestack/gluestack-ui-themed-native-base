import React from 'react';
import { Center, Heading, Text } from '@gluestack-ui/themed';

const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <>
      <Heading italic color="red.900" mt="10" {...props}>
        {text}
        <Text color="blue.800">{text}</Text>
      </Heading>
      <Text>{text}</Text>
    </>
  );
};

export default HeadingStory;

export { Center, Heading };
