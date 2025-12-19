const { defineConfig } = require("tsup");

module.exports = defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,

  external: [
    "@apollo/client",
    "graphql",
    "@graphql-typed-document-node/core",

    // Node internals
    "fs",
    "path",
    "os",
    "crypto",
    "stream",

    // Prevent native deps
    "esbuild",
    "fsevents",
  ],

  esbuildOptions(options) {
    options.target = "es2020";
  },
});
