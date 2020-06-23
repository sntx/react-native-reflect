import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export type ReactNativeStyle = ViewStyle & TextStyle & ImageStyle;
export type ReactNativeStyles = Record<string, ReactNativeStyle>;

export type ReflectStyle = {
  [P in keyof ReactNativeStyle]: ReactNativeStyle[P] | ReactNativeStyle[P][];
};
export type ReflectStyles = Record<string, ReflectStyle>;
