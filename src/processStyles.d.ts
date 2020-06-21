import * as T from "./types";
/**
 * Process multiple styles
 * STODOIMPROVE return value can have the exact same keys as styles arg, right
 * now it has all the keys of T.RNStyle
 */
declare function processStyles(theme: T.Theme, styles: T.StylesSingle): Record<string, T.RNStyle>;
declare function processStyles(theme: T.Theme, styles: T.Styles): Record<string, T.RNStyle>[];
/**
 * Process single style
 * STODOIMPROVE return value can have the exact same keys as style arg, right
 * now it has all the keys of T.RNStyle. Look at types of processAttrs(), this
 * approach is implemented there
 */
export declare function processStyle(theme: T.Theme, style: T.StyleSingle): T.RNStyle;
export declare function processStyle(theme: T.Theme, style: T.Style): T.RNStyle[];
export default processStyles;
