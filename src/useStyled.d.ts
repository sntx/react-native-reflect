import {
  ReflectStyle,
  ReflectStyles,
  ReactNativeStyle,
  ReactNativeStyles,
} from "./types";

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
