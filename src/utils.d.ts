/**
 * React hook for keeping track of window's dimensions and window resize
 * changes.
 */
export declare function useWindowDimensions(): {
  width: number;
  height: number;
  aspectRatio: number;
};

/**
 * The os() utility lets you succinctly define platform specific values. Full explanation with examples: [Reflect Guide / os()](https://sntx.github.io/react-native-reflect/#/?id=os)
 */
export declare function os<W, N>({ web, native }: { web: W; native: N }): W | N;
export declare function os<W, I, A>({
  web,
  ios,
  android,
}: {
  web: W;
  ios: I;
  android: A;
}): W | I | A;
export declare function os<W, N>(values: [W, N]): W | N;
export declare function os<W, I, A>(values: [W, I, A]): W | I | A;
