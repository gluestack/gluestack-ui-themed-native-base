import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

import { NativeBaseProvider, Box } from '@gluestack-ui/themed-native-base/src';
import { BaseTheme } from './theme';

const Example = () => {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <Box bg="slateGray.500">Hello</Box>
      <Box bg="red.500">Hello</Box>
      <Box bg="myColor">Hello</Box>
      <Box bg="newColor.40">Hello</Box>
      <Box bg="newColor1">Hello</Box>
    </NativeBaseProvider>
  );
};

const ExtendThemeMeta: ComponentMeta<any> = {
  title: 'stories/UTILS/extendTheme',
  component: Example,

  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ExtendThemeMeta;

export { Example };
