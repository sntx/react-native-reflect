/**
 * React hook for keeping track of window's dimensions and window resize
 * changes.
 */
export declare const useWindowDimensions: () => {
  width: number;
  height: number;
  aspectRatio: number;
};

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
