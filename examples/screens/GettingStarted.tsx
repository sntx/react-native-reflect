import React from "react";
import { View, SafeAreaView } from "react-native";
import { styled, ThemeProvider, defaultTheme } from "react-native-reflect";

// (1) Define your theme
const theme = {
  ...defaultTheme,
  colors: {
    red: "#FF4B48",
    blue: "#2AB7CA",
    yellow: "#FFD766",
    grey: "#E6E6EA",
  },
};

// (2) Define your theme-based, responsive components
const Flex = styled(View, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const Box = styled(View, {
  // Responsive -> 100% on smaller screens, 50% on larger screens
  width: ["100%", "50%"],
  // Theme based values -> height: 6 = theme.size[6] = 96
  height: 6,
});

// (3) Create variations of your components
const RedBox = styled(Box, { backgroundColor: "red" });
const BlueBox = styled(Box, { backgroundColor: "blue" });
const YellowBox = styled(Box, { backgroundColor: "yellow" });
const GreyBox = styled(Box, { backgroundColor: "grey" });

// (4) Enjoy a fully responsive native/web UI with a clean markup!
export default function GettingStarted() {
  return (
    <SafeAreaView>
      <ThemeProvider value={theme}>
        <Flex>
          <RedBox />
          <BlueBox />
          <YellowBox />
          <GreyBox />
        </Flex>
      </ThemeProvider>
    </SafeAreaView>
  );
}
