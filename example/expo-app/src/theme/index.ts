import { extendTheme, createVariant } from '@gluestack-ui/themed-native-base';
import { Component } from 'react';

class VariantStore {
  store: {};
  createVariant: any;
  getVariant: any;

  constructor(init) {
    this.store = init ?? {};
    this.getVariant = (Component) => {
      this.store.Component
    }
  }
}

export const BaseTheme = extendTheme({
  components: {
    Text: {
      // defaultProps: {
      fontSize: 'lg',
      color: 'green.900',
      // },
      variants: {
        // size: (props) => {},
        size: createVariant(['Text', 'size'], (props) => {
          // style based on props
        }),
      },
    },
    Pressable: {
      cursor: 'pointer',
    },
  },
  colors: {
    myColor: '#008080',
    slateGray: {
      50: '#f3f2f2',
      100: '#d8d8d8',
      200: '#bebebe',
      300: '#a3a3a3',
      400: '#898989',
      500: 'red',
      600: '#565656',
      700: '#3e3e3e',
      800: '#000000',
      900: '#0d0c0d',
    },
    newColor: {
      40: '#000000',
    },
    newColor1: 'blue',
    // gray: {
    //   50: "#f3f2f2",
    //   100: "#d8d8d8",
    //   200: "#bebebe",
    //   300: "#a3a3a3",
    //   400: "#898989",
    //   500: "#6f6f6f",
    //   600: "#565656",
    //   700: "#3e3e3e",
    //   800: "#000000",
    //   900: "#0d0c0d",
    // },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
