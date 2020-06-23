<img src="https://github.com/sntx/react-native-reflect/raw/master/docs/_media/reflect-logo-color.svg" alt="logo" width="180"/>

# React Native Reflect

Responsive, theme-based style system for React Native and React Native Web
https://sntx.github.io/react-native-reflect

[![spectrum-badge][]][spectrum]

[spectrum-badge]: https://flat.badgen.net/badge/spectrum/community/cyan
[spectrum]: https://spectrum.chat/react-native-reflect

**NOTE: React Native Reflect is under active development. I'll be adding more examples, features and fixes on a daily basis, so if you're interested in the project, please stay tuned. Best way to reach me is on Spectrum chat: https://spectrum.chat/react-native-reflect**

## Description

**React Native Reflect makes it easy to create universal React Native applications for Native and Web** by providing tools for **responsive styles and props**, a **theme system** and other utilities.

React Native Reflect is an alternative to libraries such as Styled Components and Styled System, built from the ground up for React Native and React Native Web. It provides exports such as: **styled()**, **useStyled()** and **ThemeProvider**, with an API that is **React Native friendly**.

The library is also minimal, has no dependencies on other styling libraries and it is designed to be used alone or with other React Native UI libraries such as React Native Elements. Use it to define styling for a whole application, as the building blocks for creating your own UI library or just when needed to handle different screen sizes or platforms.

## Features

- Simplifies the process of creating universal React Native (Web) applications
- Built from the ground up for React Native and React Native Web
- Quickly create theme-based, responsive styles (fontSize, margin, etc.)
- Easily make any prop responsive and platform conditional
- Integrates nicely with other UI Libraries, such as React Native Elements
- Provides similar functionality to Styled Components and Styled System
- Thoroughly unit tested

# Getting Started

The following example shows how to use React Native Reflect to create theme-based responsive components. The components created will display as a single column on small screens and as two columns on larger screens.

![Getting Started Example](https://github.com/sntx/react-native-reflect/raw/master/docs/_media/getting-started-example.jpg "Getting Started Example")

## Installation

Create an Expo project and install React Native Reflect:

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

# styled()

`styled(Component, StyleSheet)`

`styled(Component, MultipleStyleSheets)`

`styled(Component, StyleSheets, Props)`

`styled(Component, MultipleStyleSheets, Props)`

Use **styled()** to create theme-based, responsive components. StyleSheets are React Native style sheets with some extra value types such as arrays. An array value is a shorthand for responsive values. Look at the examples below for more.

## Single Style

`styled(Component, StyleSheet)`

Calling styled() with a single style sheet creates a styled component with a single responsive style prop.

```javascript
const Title = styled(Text, {
  textAlign: "center",
  fontSize: [3, 4], // 3, 4 are values from theme.fontSizes[3],
                    // and theme.fontSizes[4]
});
```

---

The example below demonstrates how theme-based responsive style sheets work. Run the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples) and follow the comments in the code:

```javascript
import * as React from "react";
import { View, Text } from "react-native";
import { styled, defaultTheme } from "react-native-reflect";

// (1) Look at defaultTheme output in the console.
//
// - defaultTheme.breakpoints  determine the device's width ranges for
//                             responsive behavior. breakpoints contain 4
//                             values which will generate 5 breakpoints (xs,
//                             sm, md, lg, xl)
//
// - defaultTheme.fontSizes    are the list of font sizes our theme is using
//
// - defaultTheme.space        are the theme's list of spacing values used for
//                             margin, padding, etc.
//
console.log(defaultTheme);

// (2) Margin themed values are taken from theme.space, for example:
//
// - marginLeft: 4 = defaultTheme.space[4] = 24
//
const Container = styled(View, {
  marginLeft: 4,
  marginTop: 4,
});

// (3) Array values are responsive, resize browser window to test how values
// change based on window width.
//
// - color and fontSize change on every breakpoint (xs, sm, md, lg, xl)
// - marginTop changes at the middle of breakpoints (<= sm, >= md)
// - fontWeight changes as follows: (<= sm, md, >= lg)
//
const Title = styled(Text, {
  color: ["primary", "secondary", "success", "error", "warning"],
  fontSize: [3, 4, 5, 6, 7],
  marginTop: [5, 6],
  fontWeight: ["normal", "medium", "bold"],
  textAlign: "center",
});

const SingleStyle = ({ navigation }) => {
  return (
    <Container>
      <Title>Single Style Example</Title>
    </Container>
  );
};

export default SingleStyle;
```

Run all examples by installing the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

## Multiple Styles

`styled(Component, MultipleStyleSheets)`

Calling styled() with multiple style sheet objects creates a styled component with multiple responsive style props.

```javascript
import { Button } from "react-native-elements";
import { styled } from "react-native-reflect";

const MyButton = styled(Button, {
  containerStyle: {
    // 100% on smaller screens, 140 pixels on larger screens
    width: ["100%", 140],
  },
  buttonStyle: {
    // theme.space[3] on smaller screens,
    // theme.space[4] on larger screens
    padding: [3, 4],
    backgroundColor: "primary",
  },
});
```

---

The example below demonstrates how to define multiple theme-based, responsive style props. Run the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples) and follow the comments in the code:

```javascript
import * as React from "react";
import { View } from "react-native";
import { styled } from "react-native-reflect";
import { Button } from "react-native-elements";

const Container = styled(View, {
  margin: 4,
});

// Many UI libraries such as React Native Elements provide multiple style props
// to style components. To style this kind of components, add each style prop
// as a nested object as shown below:
const MyButton = styled(Button, {
  containerStyle: {
    // 100% on smaller screens, 140 pixels on larger screens
    width: ["100%", 140],
  },
  buttonStyle: {
    // theme.space[3] on smaller screens,
    // theme.space[4] on larger screens
    padding: [3, 4],
    backgroundColor: "primary",
    width: "100%",
  },
  titleStyle: {
    fontWeight: "bold",
  },
});

const MultipleStyles = () => {
  return (
    <Container>
      <MyButton title="MyButton" />
    </Container>
  );
};

export default MultipleStyles;
```

Run all examples with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

## Responsive Props

`styled(Component, StyleSheets, Props)`

The third optional argument of styled() is used to make any prop of a component responsive.

```javascript
import { Button } from "react-native-elements";
import { styled } from "react-native-reflect";

const MyButton = styled(
  Button,
  {},
  {
    // "solid" on smaller screens, "clear" on larger screens
    type: ["solid", "clear"],
  }
);
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

# useStyled()

`useStyled({ style, styles, attrs })`

Return value:

`{ style, styles, attrs, breakpoint, theme }`

Responsive styles and props can also be created by using the `usedStyled()` hook. This approach could be useful for adding responsive functionality to some props of an existing component without having to create components with `styled()`. It also allows the creation of more complex components, since the return values of useStyled() can be further processed inside the component.

## Single Style Hook

`useStyled({ style })`

In the example below, we're using a single style with responsive font sizes and dynamically getting the breakpoint index. Resize the browser's screen or test in different devices to see the changing breakpoint index the font size.

```javascript
import { useStyled } from "react-native-reflect";

const MyComp = () => {
  const { style, breakpoint } = useStyled({
    style: {
      // xs, sm  ->  theme.fontSizes[3]
      // md      ->  theme.fontSizes[4]
      // lg, xl  ->  theme.fontSizes[5]
      fontSize: [3, 4, 5],
    },
  });

  return <Text style={style}>{`Breakpoint Index: ${breakpoint}`}</Text>;
};
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

## Multiple Styles Hook

`useStyled({ styles })`

The following example shows how to use useStyled() hook for creating multiple responsive style sheets.

```javascript
import { Button } from "react-native-elements";
import { useStyled } from "react-native-reflect";

const MyButton = () => {
  const { styles, breakpoint } = useStyled({
    styles: {
      containerStyle: {
        // 100% on smaller screens, 200 pixels on larger screens
        width: ["100%", 200],
      },
      buttonStyle: {
        backgroundColor: "primary",
      },
    },
  });

  return (
    <Button
      containerStyle={styles.containerStyle}
      buttonStyle={styles.buttonStyle}
      title={`Breakpoint # ${breakpoint}`}
    />
  );
};
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

## Responsive Props Hook

`useStyled({ attrs })`

**useStyled()** can also be used to create generic responsive values.

```javascript
import { useStyled } from "react-native-reflect";
import { Button } from "react-native-elements";

const MyButton = () => {
  const { attrs } = useStyled({
    attrs: {
      // "solid" on smaller screens, "clear" on larger screens
      type: ["solid", "clear"],
    },
  });

  return <Button type={attrs.type} />;
};
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

# os()

`os({ web, native })`, `os({ web, ios, android })`, or:

`os([ web, native ])`, `os([ web, ios, android ])`

The os() utility lets you succinctly define platform specific values.

## Platform Props

The following example shows how to use os() with styled() to create a component with platform specific props.

```javascript
import { Button } from "react-native-elements";
import { styled, os } from "react-native-reflect";

const MyButton = styled(
  Button,
  {},
  {
    raised: os([true, false]),
    // or   os({ web: true, native: false })

    type: os(["solid", "clear", "outline"]),
    // or os({ web: "solid", ios: "clear", android: "outline" })
  }
);
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

## Responsive Platform Props

The os() utility can be used in combination with responsive array values to make values responsive and platform specific.

```javascript
import { Text } from "react-native";
import { styled, os } from "react-native-reflect";

const MyText = styled(Text, {
  // web    smaller screens  ->  "medium"  ->  "500"
  // web    larger  screens  ->  "normal"  ->  "normal"
  // native smaller screens  ->  "bold"    ->  "bold"
  // native larger  screens  ->  "medium"  ->  "medium"
  //
  fontWeight: [os(["medium", "normal"]), os(["bold", "medium"])],
});
```

Run the example above and all other example with the [React Native Reflect Examples Expo App](https://github.com/sntx/react-native-reflect/blob/master/examples/all-examples)

# Theme

The theme object is based on the [System UI Theme Specification](https://system-ui.com/theme) and it is used to store design system values and scales. You can import the **defaultTheme** to get a quick glance at it.

```javascript
import { defaultTheme } from "react-native-reflect";
console.log(defaultTheme);
```

Will output an object similar to this:

```javascript
{
  breakpoints: [375, 768, 1024, 1680],
  colors: {
    primary: "#007BFF",
    secondary: "#6C757D",
    ...
  },
  borderWidths: [1, 2, 4, 8],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 3, 6, 12, 24, 48, 96],
  sizes: [0, 3, 6, 12, 24, 48, 96],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  fontWeights: {
    normal: "normal",
    medium: "500",
    bold: "bold"
  }
}
```

## Theme Specifications

### Breakpoints

The breakpoints array defines the screen width dimensions at which responsive values change.

```javascript
breakpoints: [375, 768, 1024, 1680];
```

| Breakpoint index | Screen width                                 |
| ---------------- | -------------------------------------------- |
| 0                | less than breakpoints[0]                     |
| 1                | in between breakpoints[0] and breakpoints[1] |
| 2                | in between breakpoints[1] and breakpoints[2] |
| 3                | in between breakpoints[2] and breakpoints[3] |
| 4                | greater or equal than breakpoints[3]         |

The breakpoint index corresponds to the element in a value array. For example:

```javascript
const Box = styled(View, { width: ["100%", "90%", "80%", "70%", "60%"] });
```

**Box** will have a width of **100%** when the screen width is less than **375 pixels**, **90%** when the screen width is between **375** and **768 pixels** and so on.

Moreover, it is not necessary to include all 5 entries in a value array. If less than 5 values are supplied, the remaining breakpoints will be inferred from from the closest defined value from the center outwards, as follows:

| Value array                     | Processed as                            |
| ------------------------------- | --------------------------------------- |
| `["100%", "60%"]`               | `["100%", "100%", "60%", "60%", "60%"]` |
| `["100%", "80%", "60%"]`        | `["100%", "100%", "80%", "60%", "60%"]` |
| `["100%", "90%", "80%", "60%"]` | `["100%", "90%", "80%", "60%", "60%"]`  |

### Key Reference

The following is a list of theme keys and their corresponding style properties.

| Theme key    | Style property                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| color        | color, backgroundColor, borderColor                                                                                     |
| borderWidths | borderWidth                                                                                                             |
| fontSizes    | fontSize                                                                                                                |
| space        | margin, marginTop, marginRight, marginBottom, marginLeft, padding, paddingRight, paddingLeft, paddingTop, paddingBottom |
| sizes        | width, height, minWidth, maxWidth, minHeight, maxHeight                                                                 |
| fonts        | fontFamily                                                                                                              |
| fontWeights  | fontWeight                                                                                                              |
| radii        | borderRadius                                                                                                            |
| zIndices     | zIndex                                                                                                                  |

## ThemeProvider

To set a global theme for your application, enclose your top-most component with `<ThemeProvider>` as shown below:

```javascript
import { ThemeProvider, defaultTheme } from "react-native-reflect";

const theme = {
  ...defaultTheme,
  colors: { red: "#FF4B48", blue: "#2AB7CA" },
  space: [0, 2, 4, 8, 16, 32, 64],
};

const App = () => (
  <ThemeProvider value={theme}>
    <AppContent />
  </ThemeProvider>
);
```

# API / TypeScript

Reflect provides types for it's own methods, components and objects, along with other types which can be useful when working with React Native and Reflect.

## Objects
- [ReflectStyle](https://sntx.github.io/react-native-reflect/typedoc/index.html#reflectstyle)
- [ReflectStyles](https://sntx.github.io/react-native-reflect/typedoc/index.html#reflectstyles)
- [Theme](https://sntx.github.io/react-native-reflect/typedoc/index.html#theme)
- [ReactNativeStyle](https://sntx.github.io/react-native-reflect/typedoc/index.html#reactnativestyle)
- [ReactNativeStyles](https://sntx.github.io/react-native-reflect/typedoc/index.html#reactnativestyles)

## Components
- [ThemepPovider](https://sntx.github.io/react-native-reflect/typedoc/index.html#themeprovider)

## Methods
- [styled()](https://sntx.github.io/react-native-reflect/typedoc/index.html#styled)
- [useStyled()](https://sntx.github.io/react-native-reflect/typedoc/index.html#usestyled)
- [os()](https://sntx.github.io/react-native-reflect/typedoc/index.html#os)
- [useWindowDimensions()](https://sntx.github.io/react-native-reflect/typedoc/index.html#usewindowdimensions)
