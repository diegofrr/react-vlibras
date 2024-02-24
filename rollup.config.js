import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript()],
  external: ["react"],
};
