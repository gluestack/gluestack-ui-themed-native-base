import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import Circle from './Circle';

const style = {
  backgroundColor: '#bbf7d0',
  padding: 12,
};

const CircleMeta: ComponentMeta<typeof Circle> = {
  title: 'stories/LAYOUT/Circle',
  component: Circle,

  args: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <div style={style}>
            <p>Tip: Common use cases for Circle component are:</p>
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
export default CircleMeta;

export { Circle };
