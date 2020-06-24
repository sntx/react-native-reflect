<img src="https://github.com/sntx/react-native-reflect/raw/master/docs/_media/reflect-logo-color.svg" alt="logo" width="180"/>

# React Native Reflect

Responsive, theme-based style system for React Native and React Native Web
https://sntx.github.io/react-native-reflect

[![spectrum-badge][]][spectrum]
![MIT License][license]
[![Types](https://img.shields.io/npm/types/scrub-js.svg)](https://www.npmjs.com/package/react-native-reflect)

[spectrum-badge]: https://badgen.net/badge/spectrum/community/cyan
[spectrum]: https://spectrum.chat/react-native-reflect
[license]: https://badgen.net/badge/license/MIT/blue

```sh
npm i react-native-reflect
```

## Description

**Reflect makes it easy to create universal React Native applications for Native and Web** by providing tools for **responsive styles and props**, a **theme system** and other utilities.

Reflect is an alternative to libraries such as Styled Components and Styled System, built from the ground up for React Native and React Native Web. It provides exports such as: **styled()**, **useStyled()** and **ThemeProvider**, with an API that is **React Native friendly**.

The library is also minimal, has no dependencies on other styling libraries and it is designed to be used alone or with other React Native UI libraries such as React Native Elements. Use it to define styling for a whole application, as the building blocks for creating your own UI library, or just as needed, to handle different screen sizes or platforms.

# Getting Started

The following example shows how to use Reflect to create theme-based responsive components. The components created will display as a single column on small screens and as two columns on larger screens.

![Getting Started Example](https://github.com/sntx/react-native-reflect/raw/master/docs/_media/getting-started-example.jpg "Getting Started Example")

## Installation

Create an Expo project and install Reflect:

```bash
expo init my-reflect-app
cd my-reflect-app

# with yarn
yarn add react-native-reflect

# with npm
npm i react-native-reflect
```

## Usage

Replace contents of App.js or App.tsx with the code below:

```javascript
import React from "react";
import { View, SafeAreaView } from "react-native";
import { styled, ThemeProvider, defaultTheme } from "react-native-reflect";

// (1) Define your theme
const theme = {
  ...defaultTheme,
  colors: {
    red: "#FF4B48",
    blue: "#2AB7CA",
    yellow: "#FFD766",
    grey: "#E6E6EA",
  },
};

// (2) Define your theme-based, responsive components
const Flex = styled(View, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const Box = styled(View, {
  // Responsive -> 100% on smaller screens, 50% on larger screens
  width: ["100%", "50%"],
  // Theme based values -> height: 6 = theme.size[6] = 96
  height: 6,
});

// (3) Create variations of your components
const RedBox = styled(Box, { backgroundColor: "red" });
const BlueBox = styled(Box, { backgroundColor: "blue" });
const YellowBox = styled(Box, { backgroundColor: "yellow" });
const GreyBox = styled(Box, { backgroundColor: "grey" });

// (4) Enjoy a fully responsive native/web UI with a clean markup!
export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider value={theme}>
        <Flex>
          <RedBox />
          <BlueBox />
          <YellowBox />
          <GreyBox />
        </Flex>
      </ThemeProvider>
    </SafeAreaView>
  );
}
```

Start Expo app and run it on a web browser and on a simulator. From the command line: "Press a for Android emulator, or i for iOS simulator, or w to run on web."

```bash
# with yarn
yarn start

# with npm
npm run start
```

# Docs

- [Getting Started](https://sntx.github.io/react-native-reflect/#/?id=getting-started)
- [styled()](https://sntx.github.io/react-native-reflect/#/?id=styled)
- [useStyled()](https://sntx.github.io/react-native-reflect/#/?id=usestyled)
- [os()](https://sntx.github.io/react-native-reflect/#/?id=os)
- [Theme](https://sntx.github.io/react-native-reflect/#/?id=theme)
- [API / TypeScript](https://sntx.github.io/react-native-reflect/#/?id=api-typescript)
