import React, { useCallback } from 'react';

import {
  Actionsheet,
  Button,
  Box,
  Text,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  Icon,
} from '@gluestack-ui/themed';
import { useEffect } from 'react';
import { HeartIcon } from 'lucide-react-native';
import { Path } from 'react-native-svg';

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

  const Item = useCallback(
    ({ title }: any) => (
      <Actionsheet.Item onPress={handleClose}>
        <Actionsheet.ItemText>{title}</Actionsheet.ItemText>
      </Actionsheet.Item>
    ),
    [handleClose]
  );

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      {...props}
    >
      <Actionsheet.Content>
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text
            fontSize="16"
            color="gray.500"
            _dark={{
              color: 'gray.300',
            }}
          >
            Albums
          </Text>
        </Box>
        <Actionsheet.Item startIcon={<Icon as={TrashIcon} size="6" />}>
          Delete
        </Actionsheet.Item>
        <Actionsheet.Item startIcon={<Icon as={ShareIcon} size="6" />}>
          Share
        </Actionsheet.Item>
        <Actionsheet.Item startIcon={<Icon as={PlayIcon} size="6" />}>
          Play
        </Actionsheet.Item>
        <Actionsheet.Item startIcon={<Icon as={HeartIcon} size="6" />}>
          Favourite
        </Actionsheet.Item>
        <Actionsheet.Item
          startIcon={
            <Icon viewBox="0 0 24 24" size="6" fill="none">
              <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
            </Icon>
          }
        >
          Cancel
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
