import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import AspectRatio from './AspectRatio';

const style = {
  backgroundColor: '#bbf7d0',
  padding: 12,
};

const AspectRatioMeta: ComponentMeta<typeof AspectRatio> = {
  title: 'stories/LAYOUT/AspectRatio',
  component: AspectRatio,

  args: {
    bg: 'red.500',
    w: 100,
    h: 100,
    ratio: '3 / 4',
    chooseByHeight: false,
  },
  argTypes: {
    chooseByHeight: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <div style={style}>
            <p>Tip: Common use cases for AspectRatio component are:</p>
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

export default AspectRatioMeta;

export { AspectRatio };
