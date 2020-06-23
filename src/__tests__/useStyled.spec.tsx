jest.mock("../utils");

import React from "react";
import { Text, View } from "react-native";
import "@testing-library/jest-dom";
import useStyled from "../useStyled";
import { renderWithTheme, testBreakpoints } from "../testsUtils";

test("t001 single style - no breakpoints", () => {
  const Comp = () => {
    const { style: singleStyle } = useStyled({
      style: {
        color: "red",
      },
    });
    return (
      <View>
        <Text style={singleStyle}>My color should be red</Text>
      </View>
    );
  };

  const { firstChild } = renderWithTheme(Comp);
  expect(firstChild).toMatchSnapshot();
});

testBreakpoints("t002 single style - with breakpoints", () => {
  const Comp = () => {
    const { style: singleStyle } = useStyled({
      style: {
        color: ["red", "blue"],
      },
    });
    return (
      <View>
        <Text
          style={singleStyle}
        >{`My color should be ${singleStyle.color}`}</Text>
      </View>
    );
  };

  const { firstChild } = renderWithTheme(Comp);
  expect(firstChild).toMatchSnapshot();
});

testBreakpoints(
  "t003 single style, multiple styles and attrs - with breakpoints",
  () => {
    const Comp = () => {
      const { style: singleStyle, styles: style, attrs: attr } = useStyled({
        style: {
          color: ["red", "blue"],
          paddingRight: "7px",
        },
        styles: {
          containerStyle: {
            marginLeft: [0, 1, 2],
            paddingTop: "11px",
          },
        },
        attrs: {
          colorName: ["RED", "BLUE"],
          message: "My color should be",
        },
      });
      return (
        <View style={style.containerStyle}>
          <Text style={singleStyle}>{`${attr.message} ${attr.colorName}`}</Text>
        </View>
      );
    };

    const { firstChild } = renderWithTheme(Comp);
    expect(firstChild).toMatchSnapshot();
  }
);
