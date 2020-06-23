import {
  ReflectStyle,
  ReflectStyles,
  ReactNativeStyle,
  ReactNativeStyles,
} from "./types";

/**
 * React hook for creating responsive, theme-based style sheets and props. Full
 * explanation with examples: [Reflect Guide /
 * useStyled()](https://sntx.github.io/react-native-reflect/#/?id=usestyled)
 */
export default function useStyled<A extends Record<string, any>>({
  style,
  styles,
  attrs,
}: {
  style?: ReflectStyle;
  styles?: ReflectStyles;
  attrs?: A;
}): {
  style: ReactNativeStyle;
  styles: ReactNativeStyles;
  attrs: { [P in keyof A]: any };
};
