import React from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  FlatList,
  Icon,
} from '@gluestack-ui/themed';

const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
      <FlatList
        data={DATA}
        renderItem={({ item }: any) => (
          <Select.Item label={item.title} value={item.title} />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Select>
  );
};

export default SelectStory;

export { Center, Select, Icon, ChevronDownIcon };
