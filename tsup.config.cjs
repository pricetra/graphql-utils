const { defineConfig } = require("tsup");

module.exports = defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm"],
  dts: true,
  external: ["@apollo/client", "graphql", "@graphql-typed-document-node/core"],
  clean: true,
});
