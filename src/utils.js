import { useState, useEffect } from "react";
import { Dimensions, Platform } from "react-native";
import _ from "lodash";
/**
 * Map of theme keys by style property keys
 *
 * Not available in react native styles:
 * - border, borderTop, borderRight, borderLeft
 * - boxShadow, textShadow
 *
 * List of style properties supported by react native:
 * https://github.com/vhpoet/react-native-styling-cheat-sheet
 */
export const THEME_KEYS_BY_PROPS = {
  // space
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  padding: "space",
  paddingRight: "space",
  paddingLeft: "space",
  paddingTop: "space",
  paddingBottom: "space",
  // fontSizes
  fontSize: "fontSizes",
  // colors
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  // fonts
  fontFamily: "fonts",
  // fontWeights
  fontWeight: "fontWeights",
  // lineHeights
  lineHeight: "lineHeights",
  // letterSpacings
  letterSpacing: "letterSpacings",
  // sizes
  width: "sizes",
  height: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  // borderWidths
  borderWidth: "borderWidths",
  // borderStyles
  borderStyle: "borderStyles",
  // radii
  borderRadius: "radii",
  // zIndices
  zIndex: "zIndices",
};

export const getStretchIndex = (
  breakpointIndex,
  propertyValSize,
  breakpointsSize = 4
) => {
  if (breakpointsSize !== 4) {
    console.error("STODO: only breakpoints with size 4 is supported now");
    return 0;
  }

  // breakpointIndex: 0 1 2 3 4
  // stretchIndex:    0 1 2 3 4
  if (propertyValSize === 5) return breakpointIndex;

  // breakpointIndex:     0
  // stretchIndex:    0 0 0 0 0
  if (propertyValSize === 1) return 0;

  // breakpointIndex: 0 1 2 3
  // stretchIndex:    0 1 2 3 3
  if (propertyValSize === 4) {
    if (breakpointIndex === 4) return 3;
    return breakpointIndex;
  }

  // breakpointIndex:   0 1 2
  // stretchIndex:    0 0 1 2 2
  //
  // breakpointIndex:   0 1
  // stretchIndex:    0 0 1 1 1
  const middle = breakpointsSize / 2;
  if (breakpointIndex < middle) return 0;
  if (breakpointIndex === middle) return 1;
  const lastIndex = propertyValSize - 1;

  return lastIndex;
};

export const getWindowWidth = () => Dimensions.get("window").width;
/**
 * React hook for keeping track of window's dimensions and window resize changes.
 */
export const useWindowDimensions = () => {
  const { width, height } = Dimensions.get("window");

  const [dimensions, setDimensions] = useState({
    width,
    height,
    aspectRatio: width / height,
  });

  const onChange = ({ window: { width, height } }) => {
    setDimensions({ width, height, aspectRatio: width / height });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return dimensions;
};
/**
 * Selects value based on platform.
 *
 * If platform is web, web prop is returned.
 * If platform is iOS and ios prop is supplied, ios value is returned back.
 * If platform is Android and android prop is supplied, android value is returned back.
 * If platform is Android or iOS and android and ios props are not supplied, native value is returned back.
 */
function osObjArg({ web, ios, android, native }) {
  if (Platform.OS === "web") return web;
  if (Platform.OS === "ios" && !_.isNil(ios)) return ios;
  if (Platform.OS === "android" && !_.isNil(android)) return android;
  return native;
}

export function os(targets) {
  if (_.isPlainObject(targets)) return osObjArg(targets);

  if (!_.isArray(targets)) {
    console.error("Invalid call to os() with", targets);
    return targets;
  }

  if (targets.length === 2)
    return osObjArg({ web: targets[0], native: targets[1] });

  if (targets.length === 3)
    return osObjArg({ web: targets[0], ios: targets[1], android: targets[2] });

  console.error("Invalid call to os() with", targets);
  return targets[0];
}
