import React, { Component, FunctionComponent } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { $PropertyType, $Values } from "utility-types";

/**
 * The theme object is based on the System UI Theme Specification and it is
 * used to store design system values and scales. Full explanation with examples: [Reflect Guide / Theme](https://sntx.github.io/react-native-reflect/#/?id=theme)
 */
export declare type Theme = {
  breakpoints: [number, number, number, number];
  colors?: Record<string, string>;
  borderWidths?: number[];
  fontSizes?: number[];
  space?: number[];
  sizes?: number[];
  fonts?: Record<string, string>;
  fontWeights?: Record<string, $PropertyType<TextStyle, "fontWeight">>;
  lineHeights?: number[];
  letterSpacings?: number[];
  borderStyles?: Record<string, $PropertyType<ViewStyle, "borderStyle">>;
  radii?: number[];
  zIndices?: number[];
};

/**
 * The ThemeProvider component is used to set a global theme. Full explanation with examples: [Reflect Guide / ThemeProvider](https://sntx.github.io/react-native-reflect/#/?id=themeprovider)
 */
export declare const ThemeProvider: FunctionComponent<{ value: Theme }>;
