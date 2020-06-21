import * as React from "react";
import { View } from "react-native";
import { useStyled, styled } from "@lucido/reflect";
import { Button } from "react-native-elements";

const Container = styled(View, { margin: 4 });

const MyButton = () => {
  const { styles, breakpoint } = useStyled({
    styles: {
      containerStyle: {
        // 100% on smaller screens, 200 pixels on larger screens
        width: ["100%", 200],
      },
      buttonStyle: {
        backgroundColor: "primary",
      },
    },
  });

  return (
    <Button
      containerStyle={styles.containerStyle}
      buttonStyle={styles.buttonStyle}
      title={`Breakpoint # ${breakpoint}`}
    />
  );
};

const StyleMultipleHook = () => {
  return (
    <Container>
      <MyButton />
    </Container>
  );
};

export default StyleMultipleHook;
