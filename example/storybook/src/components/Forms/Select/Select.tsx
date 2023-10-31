import React from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  // SelectIcon,
  // SelectTrigger,
  // SelectInput,
  // SelectPortal,
  // SelectBackdrop,
  // SelectContent,
  // SelectDragIndicatorWrapper,
  // SelectDragIndicator,
  // SelectItem,
  Icon,
  // CheckIcon,
} from '@gluestack-ui/themed';

const SelectStory = ({
  _size = 'md',
  _variant = 'outline',
  ..._props
}: any) => {
  const [service, setService] = React.useState('');

  return (
    <Select
      selectedValue={service}
      minWidth="200"
      accessibilityLabel="Choose Service"
      placeholder="Choose Service"
      // _selectedItem={{
      //   bg: 'teal.600',
      //   endIcon: <CheckIcon size="5" />,
      // }}
      mt={1}
      onValueChange={(itemValue) => setService(itemValue)}
    >
      <Select.Item label="UX Research" value="ux" />
      <Select.Item label="Web Development" value="web" />
      <Select.Item label="Cross Platform Development" value="cross" />
      <Select.Item label="UI Designing" value="ui" />
      <Select.Item label="Backend Development" value="backend" />
    </Select>
  );
};

export default SelectStory;

export {
  Center,
  Select,
  // SelectTrigger,
  // SelectInput,
  // SelectIcon,
  // SelectPortal,
  // SelectBackdrop,
  // SelectContent,
  // SelectDragIndicatorWrapper,
  // SelectDragIndicator,
  // SelectItem,
  Icon,
  ChevronDownIcon,
};
