import React from 'react';
import { Textarea, FormControl } from '@gluestack-ui/themed';

const TextareaStory = ({ ...props }: any) => {
  return (
    <Textarea {...props} mx="$2">
      <Textarea.Input placeholder="Your text goes here..." />
    </Textarea>
  );
};

export default TextareaStory;

export { Textarea, FormControl };
