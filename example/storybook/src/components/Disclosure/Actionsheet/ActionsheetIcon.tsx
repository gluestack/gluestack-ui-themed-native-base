import React from 'react';

import {
  Actionsheet,
  Button,
  Icon,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  CloseIcon,
} from '@gluestack-ui/themed';
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

  const handleClose = () => setShowActionsheet(false);

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      {...props}
    >
      <Actionsheet.Content>
        <Actionsheet.Item
          startIcon={<Icon as={TrashIcon} mx="$3" />}
          onPress={handleClose}
        >
          Delete
        </Actionsheet.Item>
        <Actionsheet.Item
          startIcon={<Icon as={ShareIcon} mx="$3" />}
          onPress={handleClose}
        >
          Share
        </Actionsheet.Item>
        <Actionsheet.Item
          startIcon={<Icon as={PlayIcon} mx="$3" />}
          onPress={handleClose}
        >
          Play
        </Actionsheet.Item>
        <Actionsheet.Item
          startIcon={<Icon as={FavouriteIcon} mx="$3" />}
          onPress={handleClose}
        >
          Favourite
        </Actionsheet.Item>
        <Actionsheet.Item
          startIcon={<Icon as={CloseIcon} mx="$3" />}
          onPress={handleClose}
        >
          Cancel
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export {
  Actionsheet,
  Button,
  Icon,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  CloseIcon,
};
