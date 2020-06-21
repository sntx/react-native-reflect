import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { $Keys, $Values, $PropertyType } from "utility-types";
declare type FontWeight = $PropertyType<TextStyle, "fontWeight">;
declare type BorderStyle = $PropertyType<ViewStyle, "borderStyle">;
export declare type Theme = {
    breakpoints: number[];
    colors?: Record<string, string>;
    borderWidths?: number[];
    fontSizes?: number[];
    space?: number[];
    sizes?: number[];
    fonts?: Record<string, string>;
    fontWeights?: Record<string, FontWeight>;
    lineHeights?: number[];
    letterSpacings?: number[];
    borderStyles?: Record<string, BorderStyle>;
    radii?: number[];
    zIndices?: number[];
};
export declare type ThemePropKey = $Keys<Theme>;
export declare type ThemePropVal = $Values<Theme>;
export declare type StylePropKey = $Keys<TextStyle> | $Keys<ViewStyle> | $Keys<ImageStyle>;
export declare type RNStyle = TextStyle & ViewStyle & ImageStyle;
export declare type RNStyleKey = StylePropKey;
export declare type StylePropVal = (number | string)[] | number | string;
/** Single style, ex: { padding: [0,1], margin: "10px" } */
export declare type Style = Partial<Record<StylePropKey, StylePropVal>>;
/**
 * Multiple styles, ex:
 *   { container: { padding: [0,1] }, button: { maring: 0 } }
 */
export declare type Styles = Record<string, Style>;
/** Styles with no array prop vals */
export declare type StylesSingle = Record<string, StyleSingle>;
/** Style with no array prop vals */
export declare type StyleSingle = Partial<Record<StylePropKey, number | string>>;
export {};
