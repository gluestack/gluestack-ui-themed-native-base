import type { ComponentStory } from '@storybook/react-native';
import { Text, Center } from '@gluestack-ui/themed';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const CenterStory: MyCenterStory = () => {
  return (
    <Center bg="primary.500" h={200} w={300}>
      <Text color="rose.400" fontWeight="$bold">
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterStory;
// export const BasicCenterExample = CenterExample.bind({});

// BasicCenterExample.parameters = {
//   docs: {
//     description: {
//       story:
//         "Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.",
//     },
//   },
// };

export { Text, Center };
