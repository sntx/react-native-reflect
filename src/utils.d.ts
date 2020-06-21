import { StylePropKey, ThemePropKey } from "./types";
declare type ThemeKeysByProps = Partial<Record<StylePropKey, ThemePropKey>>;
declare type SN = string | number;
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
export declare const THEME_KEYS_BY_PROPS: ThemeKeysByProps;
export declare const getStretchIndex: (breakpointIndex: number, propertyValSize: number, breakpointsSize?: number) => number;
export declare const getWindowWidth: () => number;
/**
 * React hook for keeping track of window's dimensions and window resize changes.
 */
export declare const useWindowDimensions: () => {
    width: number;
    height: number;
    aspectRatio: number;
};
export declare function os({ web, native }: {
    web: SN;
    native: SN;
}): SN;
export declare function os({ web, ios, android, }: {
    web: SN;
    ios: SN;
    android: SN;
}): SN;
export {};
