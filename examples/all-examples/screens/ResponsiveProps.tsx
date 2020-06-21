import * as React from "react";
import { View } from "react-native";
import { styled } from "react-native-reflect";
import { Button } from "react-native-elements";

const Container = styled(View, {
  margin: 4,
});

const MyButton = styled(
  Button,
  {},
  {
    // "solid" on smaller screens, "clear" on larger screens
    type: ["solid", "clear"],
  }
);

const ResponsiveProps = () => {
  return (
    <Container>
      <MyButton title="MyButton" />
    </Container>
  );
};

export default ResponsiveProps;
