import { ViewStyle, TextStyle, ImageStyle } from "react-native";

/**
 * Single react native style sheet, for example:
 *
 * ```typescript
 * const style: ReactNativeStyle = {
 *   padding: 10,
 *   backgroundColor: "blue",
 * };
 * ```
 */
export type ReactNativeStyle = ViewStyle & TextStyle & ImageStyle;

/**
 * Multiple React Native style sheets, for example:
 *
 * ```typescript
 * const styles: ReactNativeStyles = {
 *  container: {
 *    padding: 10
 *  },
 *  title: {
 *    color: "red"
 *  }
 * }
 * ```
 */
export type ReactNativeStyles = Record<string, ReactNativeStyle>;

/**
 * Single Reflect style sheet.
 *
 * A Reflect style sheet follows the same structure of a React Native style
 * sheet. However, values are extended with arrays, for responsive behaviour
 * and with themed values for theme-based behaviour. For example:
 *
 * ```typescript
 * const reflectStyle : ReflectStyle = {
 *   padding: [0, 1, 3],  // responive values
 *   color: "primary"     // themed value
 * }
 * ```
 */
export type ReflectStyle = {
  [P in keyof ReactNativeStyle]:
    | (string | number | ReactNativeStyle[P])
    | (string | number | ReactNativeStyle[P])[];
};

/**
 * Multiple Reflect style sheets.
 *
 * A Reflect style sheet follows the same structure of a React Native style
 * sheet. However, values are extended with arrays, for responsive behaviour
 * and with themed values for theme-based behaviour. For example:
 *
 * ```typescript
 * const reflectStyles : ReflectStyles = {
 *   container : {
 *     padding: [0, 1, 3],  // responive values
 *   },
 *   title : {
 *     color: "primary"     // themed value
 *   }
 * }
 * ```
 */
export type ReflectStyles = Record<string, ReflectStyle>;
