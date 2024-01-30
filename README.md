# @gluestack-ui/themed-native-base

<h3 align="center">
  <a href="https://github.com/gluestack/gluestack-ui-themed-native-base">
    <img src="https://raw.githubusercontent.com/gluestack/gluestack-ui/main/img/gluestack-ui-banner.svg" alt="gluestack-ui logo" >
  </a>
  <br>
</h3>

### Introduction

**@gluestack-ui/themed-native-base** is a drop-in replacement for `native-base`.

### Installation

To use `native-base` components with `gluestack-ui`, all you need to do is install the `@gluestack-ui/themed-native-base` package:

```sh
$ yarn add @gluestack-ui/themed-native-base react-native-svg@13.4.0

# or

$ npm i @gluestack-ui/themed-native-base react-native-svg@13.4.0
```

#### Supported versions

- react >= 18
- react-dom >= 18
- react-native >= 0.69
- react-native-web >= 0.18

### Usage

Just change your import from `native-base` to `@gluestack-ui/themed-native-base`, and all the components along with provider will work as is.
You could also use babel for this.

If you want it to work with nextJS (page router) you will need to

- update the `next.config.js` file from something like this

```
const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

module.exports = withNativebase({
  dependencies: ["@native-base/icons", "react-native-web-linear-gradient"],
  nextConfig: {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "react-native-linear-gradient": "react-native-web-linear-gradient",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
    images: {
      domains: ["https://b.zmtcdn.com/web_assets", "upload.wikimedia.org/"],
    },
  },
});
```

-> to this

```
const path = require("path");

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
  "@native-base/icons",
  "react-native-vector-icons",
  "@native-base/next-adapter",
  "react-native-web-linear-gradient",
]);

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(__dirname, "node_modules/@native-base/icons"),
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
  images: {
    domains: ["https://b.zmtcdn.com/web_assets", "upload.wikimedia.org/"],
  },
};

module.exports = withPlugins(
  [[withTM], [withExpo, { projectRoot: __dirname }]],
  {
    ...nextConfig,
  }
);

```

- add `gs` className to Html tag and add flush function from `@gluestack-style/react` in your `_document` file from something like this

```

import { default as NativebaseDocument } from "@native-base/next-adapter/document";
import fontsCSS from "@native-base/icons/FontsCSS";
import { AppRegistry } from "react-native";
import { Main } from "next/document";
import * as React from "react";
import NextDocument, { Html, Head, NextScript } from "next/document";

class Document extends NativebaseDocument {
  // render() {
  //   return (
  //     <Html>
  //       <Head />
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}

async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent("Main", () => Main);
  const { getStyleElement } = AppRegistry.getApplication("Main");
  const page = await renderPage();
  const styles = [
    <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
    getStyleElement(),
  ];
  return { ...page, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;

```

-> to this

```
import fontsCSS from "@native-base/icons/FontsCSS";
import { AppRegistry } from "react-native-web"
import { flush } from "@gluestack-style/react"
import { Main } from "next/document";
import * as React from "react";
import NextDocument, { Html, Head, NextScript } from "next/document";

function Document(){
  return (
    <Html className="gs" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent("Main", () => Main);
  const { getStyleElement } = AppRegistry.getApplication("Main");
  const page = await renderPage();
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
    getStyleElement(),
    ...flush()
  ];
  return { ...page, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;

```

## Contributing

We welcome contributions to the `@gluestack-ui/themed-native-base`. If you have an idea for a a bug fix or a better approach, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.

## License

Licensed under the MIT License, Copyright © 2023 GeekyAnts.
