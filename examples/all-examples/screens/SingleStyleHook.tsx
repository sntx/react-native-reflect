import * as React from "react";
import { View, Text } from "react-native";
import { useStyled, styled } from "@lucido/reflect";

const Container = styled(View, {
  margin: 4,
});

const MyComp = () => {
  const { style, breakpoint } = useStyled({
    style: {
      // xs, sm  ->  theme.fontSizes[3]
      // md      ->  theme.fontSizes[4]
      // lg, xl  ->  theme.fontSizes[5]
      fontSize: [3, 4, 5],
    },
  });

  return <Text style={style}>{`Breakpoint Index: ${breakpoint}`}</Text>;
};

const StyledSingleHook = () => {
  return (
    <Container>
      <MyComp />
    </Container>
  );
};

export default StyledSingleHook;
