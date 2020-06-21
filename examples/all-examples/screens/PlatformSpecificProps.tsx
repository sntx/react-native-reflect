import * as React from "react";
import { View } from "react-native";
import { styled, os } from "@lucido/reflect";
import { Button } from "react-native-elements";

const Container = styled(View, {
  margin: 4,
});

const MyButton = styled(
  Button,
  {},
  {
    raised: os([true, false]),
    // or   os({ web: true, native: false })

    type: os(["solid", "clear", "outline"]),
    // or os({ web: "solid", ios: "clear", android: "outline" })
  }
);

const PlatformSpecificProps = () => {
  return (
    <Container>
      <MyButton title="MyButton" />
    </Container>
  );
};

export default PlatformSpecificProps;
