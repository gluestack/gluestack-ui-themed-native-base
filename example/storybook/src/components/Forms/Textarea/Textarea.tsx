import React from 'react';
import { Textarea } from '@gluestack-ui/themed';

const TextareaStory = ({ ...props }: any) => {
  return <Textarea {...props} mx="$2" placeholder="Your text goes here..." />;
};

export default TextareaStory;
