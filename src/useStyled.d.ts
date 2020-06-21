import * as T from "./types";
declare const _default: <AK extends string, AV>({ styles, style, attrs, }: {
    styles?: Record<string, Partial<Record<any, T.StylePropVal>>>;
    style?: Partial<Record<any, T.StylePropVal>>;
    attrs?: Record<AK, AV>;
}) => {
    styles: Record<string, T.RNStyle>;
    style: T.RNStyle;
    attrs: Record<AK, AV>;
    breakpoint: number;
    theme: T.Theme;
};
/**
 * React hook for responsive styles
 */
export default _default;
