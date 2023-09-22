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
        isInvalid
        value="Label 1"
        accessibilityLabel="Radio"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
        _hover={{
          bg: 'red',
        }}
      >
        Label 1
        {/* <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 1</RadioLabel> */}
      </Radio>
    </Radio.Group>
  );
};

export default RadioStory;
