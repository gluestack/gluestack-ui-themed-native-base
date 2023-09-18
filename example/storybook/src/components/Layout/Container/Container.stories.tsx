import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import Container from './Container';
import ContainerWithRef from './ContainerWithRef';

const style = {
  backgroundColor: '#bbf7d0',
  padding: 12,
};
const ContainerMeta: ComponentMeta<typeof Container> = {
  title: 'stories/LAYOUT/Container',
  component: Container,

  args: { bg: 'red.500', w: 100, h: 100 },
  parameters: {
    docs: {
      page: () => (
        <>
          <div style={style}>
            <p>Tip: Common use cases for Container component are:</p>
            <ul>
              <li>Create responsive layouts with ease.</li>
              <li>
                Provide a shorthand to pass styles via props (bg instead of
                backgroundColor).
              </li>
            </ul>
          </div>
        </>
      ),
    },
  },
};

ContainerWithRef.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default ContainerMeta;

export { Container };

export { ContainerWithRef };
