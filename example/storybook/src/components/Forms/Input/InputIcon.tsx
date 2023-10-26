import React from 'react';

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <InputGroup>
      <InputLeftAddon>leftAddon</InputLeftAddon>
      <Input
        {...props}
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      // InputLeftElement={SearchIcon}
      />
      <InputRightAddon>rightAddon</InputRightAddon>
    </InputGroup>
  );
};

export default InputStory;

export { Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
