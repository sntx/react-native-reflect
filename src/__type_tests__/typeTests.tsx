import React from "react";
import { View } from "react-native";

import { ThemeProvider, Theme } from "react-native-reflect";

const invalidTheme: {
  breakpoints: [number, number, number, number];
  tsError: string;
} = {
  breakpoints: [300, 600, 900, 1200],
  tsError: "tsError",
};

const themeTsError1: Theme = {
  breakpoints: [300, 600, 900, 1200],
  // $ExpectError
  tsError: "tsError",
};

const themeTsError2: Theme = {
  breakpoints: [300, 600, 900, 1200],
  // $ExpectError
  fontSizes: [10, 20, "tsError"],
};

// TODO: add this to docs: For typescript to work properly, typecast theme
// object... breakpoints has type number[] and Theme.breakpoints has type
// [number, number, number, number]
const validTheme: Theme = {
  breakpoints: [300, 600, 900, 1200],
  colors: { primary: "blue", secondary: "white" },
};

const valid1 = (
  <ThemeProvider value={validTheme}>
    <View />
  </ThemeProvider>
);

// $ExpectError
const tsError1 = <ThemeProvider value="tsError" />;

const tsError2 = (
  <ThemeProvider
    value={{
      breakpoints: [300, 600, 900, 1200],
      // $ExpectError
      tsError: "tsError",
    }}
  />
);
