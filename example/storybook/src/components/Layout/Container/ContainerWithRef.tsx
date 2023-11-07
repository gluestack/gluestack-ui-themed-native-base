import type { ComponentStory } from '@storybook/react-native';
import { Container } from '@gluestack-ui/themed';
import React from 'react';

type MyCustomContainerStory = ComponentStory<typeof Container>;

const ContainerWithRefExample: MyCustomContainerStory = ({ ...props }: any) => {
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

  return <Container {...props} h={100} w={100} bg="red.500" ref={myRef} />;
};

export default ContainerWithRefExample;
