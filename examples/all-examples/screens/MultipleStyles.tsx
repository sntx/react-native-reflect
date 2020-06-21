import * as React from "react";
import { View } from "react-native";
import { styled } from "@lucido/reflect";
import { Button } from "react-native-elements";

const Container = styled(View, {
  margin: 4,
});

// Many UI libraries such as React Native Elements provide multiple style props
// to style components. To style this kind of components, add each style prop
// as a nested object as shown below:
const MyButton = styled(Button, {
  containerStyle: {
    // 100% on smaller screens, 140 pixels on larger screens
    width: ["100%", 140],
  },
  buttonStyle: {
    // theme.space[3] on smaller screens,
    // theme.space[4] on larger screens
    padding: [3, 4],
    backgroundColor: "primary",
    width: "100%",
  },
  titleStyle: {
    fontWeight: "bold",
  },
});

const MultipleStyles = () => {
  return (
    <Container>
      <MyButton title="MyButton" />
    </Container>
  );
};

export default MultipleStyles;
