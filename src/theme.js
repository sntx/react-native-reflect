import React from "react";
export const defaultTheme = {
  colors: {
    primary: "#007BFF",
    secondary: "#6C757D",
    success: "#27A744",
    error: "#DD3446",
    warning: "#FFC106",
    red0: "rgb(128,0,0)",
    red1: "rgb(189,0,0)",
    red2: "rgb(255,0,0)",
    red3: "rgb(255,122,122)",
    light: "rgb(255,230,200)",
    turq0: "#e5fff9",
    turq1: "#a3ffea",
    turq2: "#a3ffeb",
  },
  breakpoints: [375, 768, 1024, 1680],
  borderWidths: [1, 2, 4, 8],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 3, 6, 12, 24, 48, 96],
  sizes: [0, 3, 6, 12, 24, 48, 96],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    normal: "normal",
    medium: "500",
    bold: "bold",
  },
};
export const ThemeContext = React.createContext(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;
