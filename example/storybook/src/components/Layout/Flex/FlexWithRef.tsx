import type { ComponentStory } from '@storybook/react-native';
import { Flex } from '@gluestack-ui/themed';
import React from 'react';

type MyCustomFlexStory = ComponentStory<typeof Flex>;

const FlexWithRefExample: MyCustomFlexStory = ({ ...props }: any) => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 8,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };
    // @ts-ignore
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return <Flex {...props} sx={{ h: 100, w: 100, bg: 'red.500' }} ref={myRef} />;
};

export default FlexWithRefExample;
