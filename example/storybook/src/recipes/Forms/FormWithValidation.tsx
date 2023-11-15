import React from 'react';
import { VStack, FormControl, Input, Center } from '@gluestack-ui/themed';

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Name
        </FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText
          _text={{
            fontSize: 'xs',
          }}
        >
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage
          _text={{
            fontSize: 'xs',
          }}
        >
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}

function Example() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}

export default () => {
  return (
    <Center flex={1} px="3">
      <Example />
    </Center>
  );
};
