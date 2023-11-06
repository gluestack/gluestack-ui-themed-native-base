import React from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  Icon,
  FormControl,
  AlertCircleIcon,
} from '@gluestack-ui/themed';

const colors = [
  { label: 'Red', value: 'red-key' },
  { label: 'Blue', value: 'blue-key' },
  { label: 'Black', value: 'black-key' },
  { label: 'Pink', value: 'pink-key', isDisabled: true },
  { label: 'Green', value: 'green-key' },
];
const SelectStory = ({ size, variant, ...props }: any) => {
  const items = colors.map((c) => {
    return (
      <Select.Item
        key={c.value}
        variant={variant}
        size={size}
        label={c.label}
        value={c.value}
        isDisabled={c.isDisabled}
      />
    );
  });
  const [selected, setSelected] = React.useState(colors[0]);
  return (
    <FormControl {...props}>
      <FormControl.Label>Choose your favorite color</FormControl.Label>
      <Select
        // dropdownOpenIcon={AddIcon}
        selectedValue={selected.value}
        selectedLabel={selected.label}
        onValueChange={(value) => {
          setSelected(colors.filter((c) => c.value === value)[0]);
        }}
      >
        {items}
      </Select>
      <FormControl.HelperText>
        You can only select one option
      </FormControl.HelperText>
      <FormControl.ErrorMessage leftIcon={<AlertCircleIcon size="xs" />}>
        Mandatory field
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default SelectStory;

export { Center, Select, Icon, ChevronDownIcon, FormControl, AlertCircleIcon };
