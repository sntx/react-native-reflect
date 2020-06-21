import React from "react";
import _ from "lodash";
import { render } from "@testing-library/react";
import { ThemeProvider } from "./theme";
import { getWindowWidth } from "./utils";

export const theme = {
  colors: {
    primary: "red",
    secondary: "pink",
    red0: "rgb(128,0,0)",
    red1: "rgb(189,0,0)",
    red2: "rgb(255,0,0)",
    red3: "rgb(255,122,122)",
    light: "rgb(255,230,200)",
  },
  breakpoints: [375, 768, 1024, 1680],
  borderWidths: [1, 2, 4, 8, 16],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 3, 6, 12, 24, 48, 96],
  sizes: [0, 3, 6, 12, 24, 48, 96],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    normal: "normal",
    medium: 500,
    bold: "bold",
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
};

export const renderWithTheme = (Comp, props) => {
  const {
    container: { firstChild },
    debug,
  } = render(
    <ThemeProvider value={theme}>
      <Comp {...props} />
    </ThemeProvider>
  );
  return { firstChild: firstChild, debug };
};

const breakpointWidths = [374, 767, 1023, 1679, 1681];

export const testBreakpoints = (title, cb) =>
  _.each(breakpointWidths, (windowWidth, breakpoint) => {
    test(`${title}, breakpoint: ${breakpoint}, windowWidth: ${windowWidth}`, () => {
      getWindowWidth.mockReturnValue(windowWidth);
      cb(breakpoint, windowWidth);
    });
  });
