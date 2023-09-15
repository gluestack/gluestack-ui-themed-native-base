import React, { useState } from 'react';
import { Switch } from '@gluestack-ui/themed';

const SwitchStory = ({ isDisabled = false, ...props }: any) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <Switch
      defaultValue={true}
      // onThumbColor="$red.500"
      value={isEnabled}
      onValueChange={(val: any) => setIsEnabled(val)}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

export default SwitchStory;
