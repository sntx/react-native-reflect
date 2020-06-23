module.exports = {
  includes: "./src/",
  exclude: [
    "**/__tests__/**/*",
    "**/__type_tests__/**/*",
    "**/examples/**/*",
    "**/testsUtils.d.ts",
  ],
  mode: "file",
  out: "docs/typedoc",
  readme: "none",
  includeDeclarations: true,
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
};
