import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { $Keys, $Values } from "utility-types";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type NamedStylesKeys = $Keys<NamedStyles>;
type NamedStylesValues = $Values<NamedStyles>;
type TextStyleKeys = $Keys<TextStyle>;

type RNStyle = ViewStyle & TextStyle & ImageStyle;

// STODONEXT
// https://github.com/vhpoet/react-native-styling-cheat-sheet
type ReflectStyle = {
  [P in keyof RNStyle]: RNStyle[P] | (string | number)[];
};

declare const _default: ({
  style,
}: {
  style: ReflectStyle;
}) => {
  style: React<string, string>;
};

/**
 * React hook for responsive styles
 */
export default _default;
