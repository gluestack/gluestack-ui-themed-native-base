import React, { useMemo, useCallback } from 'react';

import { Actionsheet, ScrollView, Button } from '@gluestack-ui/themed';
import { useEffect } from 'react';

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

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  // const renderItem = (item: any) => (return(
  //   <Actionsheet.Item onPress={handleClose} key={item}>
  //     {item}
  //   </Actionsheet.Item>)
  // );

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      {...props}
    >
      <Actionsheet.Content>
        <ScrollView>
          {data.map((item) => {
            return <Actionsheet.Item>{JSON.stringify(item)}</Actionsheet.Item>;
          })}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
