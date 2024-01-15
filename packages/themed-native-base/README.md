# @gluestack-ui/themed-native-base

<h3 align="center">
  <a href="https://github.com/gluestack/gluestack-ui-themed-native-base">
    <img src="https://raw.githubusercontent.com/gluestack/gluestack-ui/main/img/gluestack-ui-banner.svg" alt="gluestack-ui logo" >
  </a>
  <br>
</h3>

## Introduction

**@gluestack-ui/themed-native-base** is a drop-in replacement for `native-base`.

## Installation

To use `native-base` components with `gluestack-ui`, all you need to do is install the `@gluestack-ui/themed-native-base` package:

```sh
$ yarn add @gluestack-ui/themed-native-base

# or

$ npm i @gluestack-ui/themed-native-base
```

## Usage

Just change your import from `native-base` to `Gluestack-ui/themed-native-base`, and all the components along with provider will work as is.

If you want it to work with nextJS you will need to update the `next.config.js` file like this.

```
const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",

  "@expo/vector-icons",

  "@gluestack-style/react",
  "@gluestack-style/legend-motion-animation-driver",
  "@gluestack-style/animation-plugin",
  "@gluestack-style/animation-resolver",
  "@gluestack-style/legend-motion-animation-driver",
  "@legendapp/motion",

  "@expo/html-elements",
  "expo-linear-gradient",

  "react-native-svg",
  "@react-native-aria/interactions",
  "@react-native-aria/checkbox",
  "@react-native-aria/focus",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-stately/slider",
  "@react-native-aria/toggle",
  "@react-native-aria/utils",
  "@react-native-aria/menu",
  "@gluestack-ui/actionsheet",
  "@gluestack-ui/form-control",
  "@gluestack-ui/avatar",
  "@gluestack-ui/modal",
  "@gluestack-ui/button",
  "@gluestack-ui/checkbox",
  "@gluestack-ui/divider",
  "@gluestack-ui/fab",
  "@gluestack-ui/hooks",
  "@gluestack-ui/hstack",
  "@gluestack-ui/icon",
  "@gluestack-ui/input",
  "@gluestack-ui/link",
  "@gluestack-ui/menu",
  "@gluestack-ui/modal",
  "@gluestack-ui/overlay",
  "@gluestack-ui/popover",
  "@gluestack-ui/progress",
  "@gluestack-ui/provider",
  "@gluestack-ui/radio",
  "@gluestack-ui/select",
  "@gluestack-ui/slider",
  "@gluestack-ui/spinner",

  "@gluestack-ui/switch",
  "@gluestack-ui/textarea",
  "@gluestack-ui/toast",
  "@gluestack-ui/tooltip",
  "@gluestack-ui/vstack",
  "@gluestack-ui/transitions",
  "@gluestack-ui/utils",
  "@gluestack-ui/tabs",
  "@gluestack-ui/react-native-aria",
  "@gluestack-ui/alert-dialog",
  "@gluestack-ui/pressable",
  "@gluestack-ui/themed-native-base",
]);

module.exports = withPlugins(
  [[withTM], [withExpo, { projectRoot: __dirname }]],
  {
    ...nextConfig
  }
);
```

<!--
## Contributing

We welcome contributions to the `gluestack-ui/themed-native-base`. If you have an idea for a a bug fix or a better approach, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.
-->

## License

Licensed under the MIT License, Copyright © 2023 GeekyAnts.
