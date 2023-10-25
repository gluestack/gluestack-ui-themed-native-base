//@ts-nocheck
import React from 'react';
import {
  Alert,
  Text,
  Center,
  Button,
  Slide,
  useColorModeValue,
} from '@gluestack-ui/themed';

function AlertStory({ ...props }: any) {
  return (
    <>
      <Alert {...props}>
        <Alert.Icon mr="0" />
        <Text>Selection successfully moved!</Text>
      </Alert>
      <Example />
    </>
  );
}

export default AlertStory;
// const Example = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   return (
//     <Center>
//       <Button shadow={2} onPress={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Hide' : 'Show'}
//       </Button>
//       <PresenceTransition
//         visible={isOpen}
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//           transition: {
//             duration: 250,
//           },
//         }}
//       >
//         <Center
//           mt="7"
//           bg="teal.500"
//           rounded="md"
//           w="200px"
//           h="100px"
//           _text={{
//             color: 'white',
//           }}
//           shadow={2}
//         >
//           Fade
//         </Center>
//       </PresenceTransition>
//     </Center>
//   );
// };
const Example = () => {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;
  return (
    <Center h="32">
      <Slide in={isOpenTop} placement="left">
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
};
