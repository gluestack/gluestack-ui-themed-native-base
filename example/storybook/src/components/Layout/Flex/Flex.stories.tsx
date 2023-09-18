import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import Flex from './Flex';
import FlexWithRef from './FlexWithRef';

const style = {
  backgroundColor: '#bbf7d0',
  padding: 12,
};

const FlexMeta: ComponentMeta<typeof Flex> = {
  title: 'stories/LAYOUT/Flex',
  component: Flex,

  args: { bg: 'red.500', w: 100, h: 100 },
  parameters: {
    docs: {
      page: () => (
        <>
          <div style={style}>
            <p>Tip: Common use cases for Flex component are:</p>
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

FlexWithRef.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default FlexMeta;

export { Flex };

export { FlexWithRef };
