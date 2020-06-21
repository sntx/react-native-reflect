import * as React from "react";
import { View, Text } from "react-native";
import { styled, defaultTheme } from "@lucido/reflect";

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
const Container = styled(View, { margin: 4 });

// (3) Array values are responsive, resize browser window to test how values
// change based on window width.
//
// - color and fontSize change on every breakpoint (xs, sm, md, lg, xl)
// - marginTop changes at the middle of breakpoints (<= sm, >= md)
// - fontWeight changes at the left, right and middle of breakpoint (<= sm, md, >= lg)
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
