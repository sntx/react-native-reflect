import { ComponentType } from "react";
import * as T from "./types";

declare type StyleArg = T.Styles | T.Style;

declare type NamedStyledArgs<K extends string, V> = [
  string,
  ComponentType,
  StyleArg?,
  Record<K, V>?
];

declare type UnnamedStyledArgs<K extends string, V> = [
  ComponentType,
  StyleArg?,
  Record<K, V>?
];

export declare type StyledArgs<K extends string, V> =
  | UnnamedStyledArgs<K, V>
  | NamedStyledArgs<K, V>;

export default function styled<
  K extends string,
  V,
  CType extends ComponentType
>(name: string, C: CType, s?: T.Styles, a?: Record<K, V>): CType;

export default function styled<
  K extends string,
  V,
  CType extends ComponentType
>(name: string, C: CType, s?: T.Style, a?: Record<K, V>): CType;

export default function styled<
  K extends string,
  V,
  CType extends ComponentType
>(C: CType, s?: T.Styles, a?: Record<K, V>): CType;

export default function styled<
  K extends string,
  V,
  CType extends ComponentType
>(C: CType, s?: T.Style, a?: Record<K, V>): CType;
