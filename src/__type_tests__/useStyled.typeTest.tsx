import { useStyled } from "react-native-reflect";

const { style, styles, attrs } = useStyled({
  style: {
    fontSize: [4],
    flex: 1,
    resizeMode: "cover",
    // $ExpectError
    tsError: "tsError",
  },
  styles: {
    container: {
      fontSize: [4],
      flex: 1,
      resizeMode: "cover",
      // $ExpectError
      tsError: "tsError",
    },
  },
  attrs: {
    a0: "val0",
    a1: [0, "1", false],
  },
});

// $ExpectType ReactNativeStyle
style;

// $ExpectType Record<string, ReactNativeStyle>
styles;

// NOTE: Not sure it is possible to properly set types for attrs. For example,
//
// for a0: "val0", the resulting type would need to be: string
//
// for a1: [0, "1", false], the resulting type would need to be:
// number | string | boolean
//
// $ExpectType { a0: any; a1: any; }
attrs;

// $ExpectType string | undefined
style.borderBottomColor;

// $ExpectType number | undefined
style.fontSize;

// $ExpectType number | undefined
styles.container.fontSize;

// $ExpectType "cover" | "contain" | "stretch" | "repeat" | "center" | undefined
styles.container.resizeMode;

// $ExpectError
attrs.tsError;
