import { os, useWindowDimensions } from "react-native-reflect";

// NOTE: for some reason, ExpectType is not working for these lines, might be
// version of TypeScript? Doing checks manually instead
const returnVal0: string | number = os({ web: 0, native: "1" });
const returnVal1: string | number | boolean = os({
  web: 0,
  ios: "1",
  android: false,
});
const returnVal2: string | number = os([0, "1"]);
const returnVal3: string | number | boolean = os([0, "1", false]);

os({ web: 0 }); // $ExpectError
os({ web: 0, ios: 1 }); // $ExpectError
os({ web: 0, android: 1 }); // $ExpectError
os({ android: 1, ios: 2 }); // $ExpectError
os({ web: 0, ios: 1, native: 2 }); // $ExpectError
os({ web: 0, android: 1, native: 2 }); // $ExpectError
os({ web: 0, ios: 1, android: 2, native: 3 }); // $ExpectError
os(); // $ExpectError
os([0]); // $ExpectError
os([0, 1, 2, 3]); // $ExpectError

// $ExpectType { width: number; height: number; aspectRatio: number; }
const { width, height, aspectRatio } = useWindowDimensions();
