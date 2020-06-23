import React, { Component, FunctionComponent } from "react";
import { $PropertyType, $Values } from "utility-types";

declare type FontWeight = $PropertyType<TextStyle, "fontWeight">;
declare type BorderStyle = $PropertyType<ViewStyle, "borderStyle">;

export declare type Theme = {
  breakpoints: [number, number, number, number];
  colors?: Record<string, string>;
  borderWidths?: number[];
  fontSizes?: number[];
  space?: number[];
  sizes?: number[];
  fonts?: Record<string, string>;
  fontWeights?: Record<string, FontWeight>;
  lineHeights?: number[];
  letterSpacings?: number[];
  borderStyles?: Record<string, BorderStyle>;
  radii?: number[];
  zIndices?: number[];
};

export declare const ThemeProvider: FunctionComponent<{ value: Theme }>;
