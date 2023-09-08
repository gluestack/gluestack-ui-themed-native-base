import React from 'react';
import { FormControl, Input, AlertCircleIcon } from '@gluestack-ui/themed';

const FormControlStory = ({ ...props }) => {
  return (
    <FormControl {...props}>
      <FormControl.Label>Password</FormControl.Label>
      <Input type="password" defaultValue="12345" placeholder="password" />
      <FormControl.HelperText>
        Must be atleast 6 characters.
      </FormControl.HelperText>
      <FormControl.ErrorMessage leftIcon={AlertCircleIcon}>
        Atleast 6 characters are required.
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default FormControlStory;
