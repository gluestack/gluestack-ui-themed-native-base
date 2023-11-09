import React from 'react';
import { FormControl, Input, AlertCircleIcon } from '@gluestack-ui/themed';

const FormControlStory = ({ ...props }) => {
  return (
    <FormControl {...props}>
      <FormControl.Label
      // _astrick={{
      //   color: 'green.400',
      //   fontWeight: 'bold',
      // }}
      >
        Password
      </FormControl.Label>
      <Input type="password" defaultValue="12345" placeholder="password" />
      <FormControl.HelperText
      // _invalid={{
      //   _text: {
      //     color: 'green.400',
      //     fontWeight: 'bold',
      //   },
      // }}
      >
        Must be atleast 6 characters.
      </FormControl.HelperText>
      <FormControl.ErrorMessage
        // _disabled={{
        //   _text: {
        //     color: 'green.400',
        //     fontWeight: 'bold',
        //   },
        // }}
        // _stack={{
        //   flexDirection: 'column',
        // }}
        startIcon={<AlertCircleIcon />}
        // endIcon={AlertCircleIcon}
      >
        Atleast 6 characters are required.
        {/*  */}
        mmm
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default FormControlStory;
