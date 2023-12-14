import React from 'react';
import { Text, Center } from '@gluestack-ui/themed';

const TextStory = ({ size = 'md', text = 'Hello world', ...props }: any) => {
  return (
    <>
      <Text fontSize={size} {...props} color="red.900" bold>
        {text + '1'}
        <Text fontSize={size} {...props} color="blue.900" italic ml="2">
          {text + '2'}
          <Text fontSize={'xs'} {...props} ml="2">
            {text + '3'}
          </Text>
        </Text>
      </Text>
    </>
  );
};

export default TextStory;

export { Text, Center };
