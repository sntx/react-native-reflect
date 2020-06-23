import { ComponentType } from "react";
import {
  ReflectStyle,
  ReflectStyles,
  ReactNativeStyle,
  ReactNativeStyles,
} from "./types";

/**
 * Use **styled()** to create theme-based, responsive components. Full
 * explanation with examples: [Reflect Guide /
 * styled()](https://sntx.github.io/react-native-reflect/#/?id=styled)
 */
export default function styled<C extends ComponentType>(
  Component: C,
  style: ReflectStyle,
  attrs?: Record<string, any>
): C;
export default function styled<C extends ComponentType>(
  Component: C,
  style: ReflectStyles,
  attrs?: Record<string, any>
): C;
export default function styled<C extends ComponentType>(
  name: string,
  Component: C,
  style: ReflectStyle,
  attrs?: Record<string, any>
): C;
export default function styled<C extends ComponentType>(
  name: string,
  Component: C,
  style: ReflectStyles,
  attrs?: Record<string, any>
): C;
