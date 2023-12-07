//@ts-nocheck
import React from 'react';
import {
  Alert,
  VStack,
  HStack,
  Heading,
  IconButton,
  CloseIcon,
  Box,
} from '@gluestack-ui/themed';

function AlertStory() {
  return (
    <>
      <Alert shadow={2} maxW={400} w="100%" colorScheme="info">
        <VStack space={1} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Heading fontSize="md" fontWeight="medium" color="coolGray.800">
                We are going live in July!
              </Heading>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}
          >
            We are happy to announce that we are going live on July 28th. Get
            ready!
          </Box>
        </VStack>
      </Alert>
    </>
  );
}

export default AlertStory;
