import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Pressable,
  SearchIcon,
} from '@gluestack-ui/themed';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        InputLeftElement={
          <div>Hello</div>
          // <Icon
          //   as={<MaterialIcons name="person" />}
          //   size={5}
          //   ml="2"
          //   color="muted.400"
          // />
        }
        placeholder="Name"
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        type={'password'}
        // InputRightElement={
        //   <Pressable onPress={() => setShow(!show)}>
        //     <Icon
        //       as={
        //         <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
        //       }
        //       size={5}
        //       mr="2"
        //       color="muted.400"
        //     />
        //   </Pressable>
        // }
        placeholder="Password"
      />
    </>

    // <Input
    //   {...props}
    //   onChange={(e: any) => {
    //     setValue(e.nativeEvent.text);
    //   }}
    //   value={value}
    //   type={"password"}
    //   placeholder="Enter Text here"
    // // InputLeftElement={SearchIcon}
    // />
  );
};

export default InputStory;
