import React from 'react';

import { Checkbox, AddIcon } from '@gluestack-ui/themed';

const CheckboxStory = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <Checkbox.Group
      accessibilityLabel="Checkbox Group"
      isDisabled={props.isDisabled}
      isReadOnly={props.isReadOnly}
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
    >
      <Checkbox
        icon={AddIcon}
        mb="$2"
        size={props.size}
        isInvalid={props.isInvalid}
        isIndeterminate
        value="Label 1"
        aria-label="Label 1"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-1"
        {...props}
      />
      <Checkbox
        size={props.size}
        isInvalid={props.isInvalid}
        isIndeterminate
        colorScheme="success"
        value="Label 2"
        aria-label="Label 2"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-2"
      >
        Label 2
      </Checkbox>
    </Checkbox.Group>
  );
};

export default CheckboxStory;
