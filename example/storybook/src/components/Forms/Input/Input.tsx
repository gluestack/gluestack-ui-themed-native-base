import React from 'react';
import { Input, SearchIcon } from '@gluestack-ui/themed';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Input
      {...props}
      onChange={(e: any) => {
        setValue(e.nativeEvent.text);
      }}
      value={value}
      placeholder="Enter Text here"
      InputLeftElement={<SearchIcon />}
    />
  );
};

export default InputStory;
