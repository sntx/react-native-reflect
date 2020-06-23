import { os } from "../utils";
import { Platform } from "react-native";

test("os({}) with object argument", () => {
  const webOrNative = os({ web: "web", native: "native" });
  const webOrIosOrAndroid = os({ web: "web", ios: "ios", android: "android" });

  if (Platform.OS === "web") {
    expect(webOrNative).toBe("web");
    expect(webOrIosOrAndroid).toBe("web");
  } else if (Platform.OS === "ios") {
    expect(webOrNative).toBe("native");
    expect(webOrIosOrAndroid).toBe("ios");
  } else if (Platform.OS === "android") {
    expect(webOrNative).toBe("native");
    expect(webOrIosOrAndroid).toBe("android");
  }
});

test("os([]) with array argument", () => {
  const webOrNative = os(["web", "native"]);
  const webOrIosOrAndroid = os(["web", "ios", "android"]);

  if (Platform.OS === "web") {
    expect(webOrNative).toBe("web");
    expect(webOrIosOrAndroid).toBe("web");
  } else if (Platform.OS === "ios") {
    expect(webOrNative).toBe("native");
    expect(webOrIosOrAndroid).toBe("ios");
  } else if (Platform.OS === "android") {
    expect(webOrNative).toBe("native");
    expect(webOrIosOrAndroid).toBe("android");
  }
});
