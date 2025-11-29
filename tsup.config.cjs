const { defineConfig } = require("tsup");

module.exports = defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  external: ["@apollo/client", "graphql", "@graphql-typed-document-node/core"],
  clean: true,
  splitting: false,
  sourcemap: true,
  esbuildOptions(options) {
    options.target = "es2020";
  },
});
