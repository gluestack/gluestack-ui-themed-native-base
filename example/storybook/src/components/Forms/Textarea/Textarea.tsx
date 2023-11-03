import React from 'react';
import { TextArea } from '@gluestack-ui/themed';

const TextareaStory = ({ ...props }: any) => {
  return <TextArea {...props} mx="$2" placeholder="Your text goes here..." />;
};

export default TextareaStory;
