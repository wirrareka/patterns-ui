import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json'
import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  external: ['stream'],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/react-is/index.js": ["isElement", "isValidElementType"],
        "node_modules/@react-pdf/renderer/node_modules/scheduler/index.js": [
          "unstable_cancelCallback",
          "unstable_scheduleCallback"
        ]
      }
    }),
    json({}),
    sass({
      insert: true
    })
  ]
}

