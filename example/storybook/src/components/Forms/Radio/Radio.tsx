import React from 'react';
/* eslint-disable no-console */
import { Radio } from '@gluestack-ui/themed';

const RadioStory = ({
  size,
  isDisabled,
  isInvalid,
  isReadOnly,
  ...props
}: any) => {
  const [values, setValues] = React.useState();

  return (
    <Radio.Group
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      value={values}
      onChange={setValues}
    >
      <Radio
        size={size}
        value="Label 1"
        isInvalid={isInvalid}
        accessibilityLabel="Radio"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
        colorScheme="primary"
      >
        Label 1
      </Radio>

      <Radio
        size={size}
        value="Label 2"
        isInvalid={isInvalid}
        accessibilityLabel="Radio"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
        colorScheme="primary"
      >
        Label 2
      </Radio>
      <Radio
        size={size}
        value="Label 3"
        isInvalid={isInvalid}
        accessibilityLabel="Radio"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
        colorScheme="primary"
      >
        Label 3
      </Radio>
    </Radio.Group>
  );
};

export default RadioStory;
