import processAttrs from "../processAttrs";

const breakpoints = [375, 768, 1024, 1680];

test("t001 Should not stretch single value", () => {
  const attrs = { numColumns: 3 };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t002 Should stretch array of 1 value", () => {
  const attrs = { numColumns: [3] };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t003 Should stretch odd array of 3 values", () => {
  const attrs = { numColumns: [3, 4, 5] };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t004 Should stretch odd array of 5 values", () => {
  const attrs = { numColumns: [2, 3, 4, 5, 6] };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t005 Should stretch even array of 2 values", () => {
  const attrs = { numColumns: [3, 4] };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t006 Should stretch even array of 4 values", () => {
  const attrs = { numColumns: [2, 3, 4, 5] };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});

test("t007 Should work with array and non-array values", () => {
  const attrs = {
    breed: ["short hair", "callico"],
    specie: "cat",
    info: {
      prop1: "property 1",
      prop2: "property 2"
    }
  };

  const result = processAttrs(breakpoints, attrs);
  expect(result).toMatchSnapshot();
});
