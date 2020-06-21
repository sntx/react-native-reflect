import babel from "rollup-plugin-babel";

const rn = process.env.TARGET === "react-native";

const file = rn ? "lib/rn.js" : "lib/index.js";

export default {
  external: ["react", "react-native", "lodash"],
  input: "src/index.js",
  output: { file, format: "cjs", exports: "named" },
  plugins: [
    babel({
      presets: [["es2015", { modules: false }], "react", "stage-0"],
      plugins: ["external-helpers"],
      comments: false,
      babelrc: false,
    }),
  ],
};
