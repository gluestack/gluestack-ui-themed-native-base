import React, { useState } from 'react';
import { Switch } from '@gluestack-ui/themed';

const SwitchStory = ({ isDisabled = false, ...props }: any) => {
  const [isEnabled, setIsEnabled] = useState(props.isEnabled);
  return (
    // <Switch
    //   defaultValue={true}
    //   // onThumbColor="$red.500"
    //   value={isEnabled}
    //   onValueChange={(val: any) => setIsEnabled(val)}
    //   isDisabled={isDisabled}
    //   size="lg"
    //   // isInvalid
    //   // colorScheme="red"
    //   // onTrackColor={"red.500"}
    //   // onThumbColor={"green.500"}
    //   {...props}
    // />
    <>
      <Switch size="sm" m="2" />
      <Switch size="md" m="2" />
      <Switch size="lg" m="2" />
      <Switch m="2" />
      <Switch offTrackColor="orange.100" onTrackColor="orange.200" onThumbColor="orange.500" offThumbColor="orange.50" m="2" />
      <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" m="2" />
    </>
  );
};

export default SwitchStory;
