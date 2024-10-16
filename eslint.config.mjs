import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    "extends": [
      "plugin:react/jsx-runtime",
      "prettier"
    ],
    rules: {
      'react/jsx-filename-extension': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'no-unused-vars': 0,
      'react/no-array-index-key': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'react/jsx-no-constructed-context-values': 0,
      'default-param-last': 0,
      "react/jsx-max-props-per-line": [1, { "maximum": 2, "when": "multiline" }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];