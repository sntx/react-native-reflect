import { processStyle } from "../processStyles";

const theme = {
  breakpoints: [375, 768, 1024, 1680],
  space: [0, 3, 6, 12, 24, 48, 96]
};

test("Should not stretch single values", () => {
  const style = {
    padding: 2,
    margin: 1
  };
  const stylesExpect = {
    padding: 6,
    margin: 3
  };

  const stylesResult = processStyle(theme, style);

  expect(stylesResult).toEqual(stylesExpect);
});

test("Should stretch odd array of 3 values", () => {
  const style = {
    padding: [2, 3, 4], // 6, 12, 24
    margin: [1, 2]
  };

  const stylesExpect = [
    { padding: 6, margin: 3 }, //  -- small phone
    { padding: 6, margin: 3 }, //  -- normal phone
    { padding: 12, margin: 6 }, // -- tablet
    { padding: 24, margin: 6 }, // -- normal desktop
    { padding: 24, margin: 6 } //  -- large desktop
  ];

  const stylesResult = processStyle(theme, style);

  expect(stylesResult).toEqual(stylesExpect);
});
