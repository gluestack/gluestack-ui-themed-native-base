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

If you want it to work with nextJS you will need to use the `withGluestackUI` adapter in NextJS.

- install the `@gluestack/ui-next-adapter` package.
- update the `next.config.js` file like this.

```
/** @type {import('next').NextConfig} */

const { withGluestackUI } = require("@gluestack/ui-next-adapter")

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@gluestack-ui/themed-native-base"],
}

module.exports = withGluestackUI(nextConfig)
```

- add flush function from `@gluestack-style/react` to your `_document` file like this

```
import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native-web';
import { flush } from '@gluestack-style/react';

function Document() {
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

Document.getInitialProps = async ({ renderPage }: any) => {
  AppRegistry.registerComponent('Main', () => Main);
  const { getStyleElement } = AppRegistry.getApplication('Main');
  const page = await renderPage();
  const styles = [getStyleElement(), ...flush()];
  return { ...page, styles: React.Children.toArray(styles) };
};

export default Document;
```

<!--
## Contributing

We welcome contributions to the `gluestack-ui/themed-native-base`. If you have an idea for a a bug fix or a better approach, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.
-->

## License

Licensed under the MIT License, Copyright © 2023 GeekyAnts.
