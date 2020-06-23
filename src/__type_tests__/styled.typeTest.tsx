import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styled } from "react-native-reflect";

// $ExpectType typeof Button
const StyledSingle = styled(Button, { fontSize: 4 });

// $ExpectType typeof Button
const StyledSingleNamed = styled("MyButton", Button, { fontSize: 4 });

// $ExpectType typeof Button
const StyledSingleTsError = styled(Button, {
  fontSize: 4,
  // $ExpectError
  tsError: "tsError",
});

// $ExpectType typeof Button
const StyledMultiple = styled(Button, { container: { fontSize: 4 } });

// $ExpectType typeof Button
const StyledMultipleNamed = styled("MyButton", Button, {
  container: { fontSize: 4 },
});

// $ExpectError
const StyledMultipleTsError = styled(Button, {
  container: {
    fontSize: 4,
    tsError: "tsError",
  },
});

// $ExpectType typeof Button
const StyledAttrs = styled(Button, { padding: [1, 2] }, { a0: "a0" });
const StyledAttrsNamed = styled(
  "MyButton",
  Button,
  { padding: [1, 2] },
  { a0: "a0" }
);

const MyComp = () => (
  <View>
    <StyledSingle containerStyle={{ padding: 10 }} />
    <StyledSingleNamed containerStyle={{ padding: 10 }} />
    <StyledSingleTsError
      containerStyle={{
        padding: 10,
        // $ExpectError
        tsError: "tsError",
      }}
    />

    <StyledMultiple containerStyle={{ padding: 10 }} />
    <StyledMultipleNamed containerStyle={{ padding: 10 }} />
    <StyledMultipleTsError
      containerStyle={{
        padding: 10,
        // $ExpectError
        tsError: "tsError",
      }}
    />

    <StyledAttrs containerStyle={{ padding: 10 }} />
    <StyledAttrsNamed containerStyle={{ padding: 10 }} />
  </View>
);
