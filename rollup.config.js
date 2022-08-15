import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import babel from "rollup-plugin-babel";

const extensions = [".js", ".ts"];

export default {
  input: "src/main.ts",
  output: {
    file: "bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    json(),
    babel({
      extensions,
      exclude: "node_modules/**",
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    livereload(),
    serve({
      open: true,
      port: 8000,
      openPage: "/src/index.html",
      contentBase: "",
    }),
  ],
};
