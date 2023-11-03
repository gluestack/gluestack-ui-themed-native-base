// import { BaseTheme } from "./index";

// import { extendTheme } from "native-base";
import { extendTheme } from '@gluestack-ui/themed-native-base/src';

// export const BaseTheme = extendTheme({});
export const BaseTheme = extendTheme({
  components: {
    Text: {
      // defaultProps: {
      fontSize: 'lg',
      color: 'green.900',
      // },
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

type ConfigType = typeof BaseTheme;
// type ConfigComponentType = /typeof BaseTheme.components;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
  // interface ICustomComponents extends ConfigComponentType {}
}
