import React from 'react';
import {
  Center,
  Slide,
  Alert,
  Text,
  Button,
  useColorModeValue,
} from '@gluestack-ui/themed';

function SkeletonStory() {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;
  return (
    <Center h="32" mt={100}>
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" status="error" safeAreaTop={8}>
          <Alert.Icon />
          <Text color="error.600" fontWeight="medium">
            No Internet Connection
          </Text>
        </Alert>
      </Slide>
      <Button
        onPress={() => setIsOpenTop(!isOpenTop)}
        variant="unstyled"
        bg="coolGray.700:alpha.30"
        _text={{
          color: useColorModeValue('darkText', 'lightText'),
        }}
      >
        {str}
      </Button>
    </Center>
  );
}

export default SkeletonStory;
