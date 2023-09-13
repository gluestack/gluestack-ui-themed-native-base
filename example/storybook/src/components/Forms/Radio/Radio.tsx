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
      value={values}
      onChange={setValues}
    >
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 1"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
      >
        Label 1
        {/* <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 1</RadioLabel> */}
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 2"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        Label 2
        {/* <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 2</RadioLabel> */}
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 3"
        accessibilityLabel="Radio"
        onChange={(isSelected: boolean) =>
          console.log(isSelected, 'isSelected')
        }
      >
        Label 3
        {/* <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 3</RadioLabel> */}
      </Radio>
    </Radio.Group>
  );
};

export default RadioStory;
