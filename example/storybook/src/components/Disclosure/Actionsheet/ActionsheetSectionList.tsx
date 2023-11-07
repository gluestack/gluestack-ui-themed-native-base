import React, { useCallback, useEffect } from 'react';

import {
  Actionsheet,
  Button,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
} from '@gluestack-ui/themed';

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = useCallback(
    () => setShowActionsheet(false),
    [setShowActionsheet]
  );

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      {...props}
    >
      <Actionsheet.Content>
        <ActionsheetSectionList
          sections={DATA}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({ item }: any) => (
            <Actionsheet.Item onPress={handleClose}>{item}</Actionsheet.Item>
          )}
          renderSectionHeader={({ section: { title, data } }: any) => (
            <ActionsheetSectionHeaderText>
              {title} ({data.length})
            </ActionsheetSectionHeaderText>
          )}
        />
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
