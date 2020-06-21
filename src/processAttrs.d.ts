/**
 * Process Attributes
 */
declare function processAttrs<K extends string, V>(breakpoints: number[], attrs: Record<K, V[]>): Record<K, V>[];
declare function processAttrs<K extends string, V>(breakpoints: number[], attrs: Record<K, V>): Record<K, V>;
export default processAttrs;
