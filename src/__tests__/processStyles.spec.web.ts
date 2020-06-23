import "@testing-library/jest-dom";
import * as T from "../types";

import processStyles from "../processStyles";

const theme: T.Theme = {
  breakpoints: [375, 768, 1024, 1680],
  borderWidths: [1, 2, 4],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {},
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
};

test("Should stretch odd array of 1 value", () => {
  const styles = {
    container: {
      padding: [2] // 6
    }
  };

  const stylesExpect = [
    { container: { padding: 6 } }, //  -- small phone
    { container: { padding: 6 } }, //  -- normal phone
    { container: { padding: 6 } }, //  -- tablet
    { container: { padding: 6 } }, //  -- normal desktop
    { container: { padding: 6 } } //   -- large desktop
  ];

  const stylesResult = processStyles(theme, styles);

  expect(stylesResult).toEqual(stylesExpect);
});

test("Should not stretch single values", () => {
  const styles = {
    container: {
      padding: 2
    }
  };
  const stylesExpect = {
    container: {
      padding: 6
    }
  };

  const stylesResult = processStyles(theme, styles);

  expect(stylesResult).toEqual(stylesExpect);
});

test("Should stretch odd array of 3 values", () => {
  const styles = {
    container: {
      padding: [2, 3, 4] // 6, 12, 24
    }
  };

  const stylesExpect = [
    { container: { padding: 6 } }, //  -- small phone
    { container: { padding: 6 } }, //  -- normal phone
    { container: { padding: 12 } }, // -- tablet
    { container: { padding: 24 } }, // -- normal desktop
    { container: { padding: 24 } } //  -- large desktop
  ];

  const stylesResult = processStyles(theme, styles);
  expect(stylesResult).toEqual(stylesExpect);
});

test("Should stretch odd array of 5 values", () => {
  const styles = {
    container: {
      padding: [2, 3, 4, 5, 6] // 6, 12, 24, 48, 96
    }
  };

  const stylesExpect = [
    { container: { padding: 6 } }, //   -- small phone
    { container: { padding: 12 } }, //  -- normal phone
    { container: { padding: 24 } }, //  -- tablet
    { container: { padding: 48 } }, //  -- normal desktop
    { container: { padding: 96 } } //   -- large desktop
  ];

  const stylesResult = processStyles(theme, styles);
  expect(stylesResult).toEqual(stylesExpect);
});

test("Should stretch even array of 2 values", () => {
  const styles = {
    container: {
      padding: [2, 3] // 6, 12
    }
  };

  const stylesExpect = [
    { container: { padding: 6 } }, //  -- small phone
    { container: { padding: 6 } }, //  -- normal phone
    { container: { padding: 12 } }, // -- tablet
    { container: { padding: 12 } }, // -- normal desktop
    { container: { padding: 12 } } //  -- large desktop
  ];

  const stylesResult = processStyles(theme, styles);
  expect(stylesResult).toEqual(stylesExpect);
});

test("Should stretch even array of 4 values", () => {
  const styles = {
    container: {
      padding: [2, 3, 4, 5] // 6, 12, 24, 48
    }
  };

  const stylesExpect = [
    { container: { padding: 6 } }, //  -- small phone
    { container: { padding: 12 } }, // -- normal phone
    { container: { padding: 24 } }, // -- tablet
    { container: { padding: 48 } }, // -- normal desktop
    { container: { padding: 48 } } //  -- large desktop
  ];

  const stylesResult = processStyles(theme, styles);
  expect(stylesResult).toEqual(stylesExpect);
});
