import * as React from "react";
import { View, Text } from "react-native";
import { styled, os } from "@lucido/reflect";

const Container = styled(View, {
  margin: 4,
});

const MyText = styled(Text, {
  //
  // web    smaller screens  ->  "medium"  ->  "500"
  // web    larger  screens  ->  "normal"  ->  "normal"
  // native smaller screens  ->  "bold"    ->  "bold"
  // native larger  screens  ->  "medium"  ->  "medium"
  //
  fontWeight: [os(["medium", "normal"]), os(["bold", "medium"])],

  fontSize: 4, // theme.fontSizes[4] = 20
});

const PlatformResponsiveProps = () => {
  return (
    <Container>
      <MyText title="MyText">My Text</MyText>
    </Container>
  );
};

export default PlatformResponsiveProps;
