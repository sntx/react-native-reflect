import * as React from "react";
import { View } from "react-native";
import { useStyled, styled } from "@lucido/reflect";
import { Button } from "react-native-elements";

const Container = styled(View, {
  margin: 4,
});

const MyButton = () => {
  const { attrs } = useStyled({
    attrs: {
      // "solid" on smaller screens, "clear" on larger screens
      type: ["solid", "clear"],
    },
  });

  return <Button type={attrs.type} />;
};

const ResponsivePropsHook = () => {
  return (
    <Container>
      <MyButton />
    </Container>
  );
};

export default ResponsivePropsHook;
