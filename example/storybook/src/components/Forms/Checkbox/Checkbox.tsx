import React from 'react';

import {
  Center,
  Text,
  CheckIcon,
  Icon,
  HStack,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Heading,
  VStack,
  RemoveIcon,
  Box,
  FormControl,
  AddIcon,
} from '@gluestack-ui/themed';

const CheckboxStory = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <Checkbox.Group
      accessibilityLabel="Checkbox Group"
      isDisabled={props.isDisabled}
      isReadOnly={props.isReadOnly}
      value={values}
      onChange={setValues}
      {...props}
      nativeID="checkbox-group"
    >
      <Checkbox
        icon={<Icon as={AddIcon} size="md" />}
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
      />
      <Checkbox
        size={props.size}
        isInvalid={props.isInvalid}
        isIndeterminate
        value="Label 2"
        aria-label="Label 2"
        accessibilityLabel="Checkbox"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-1"
      >
        Label 2
      </Checkbox>
    </Checkbox.Group>
  );
};

export default CheckboxStory;

export {
  Center,
  Text,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  VStack,
  Icon,
  HStack,
  RemoveIcon,
  Heading,
  Box,
  FormControl,
};
