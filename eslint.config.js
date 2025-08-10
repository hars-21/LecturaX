import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  // Base JS config
  js.configs.recommended,

  // Backend (Node.js) config
  {
    files: ["backend/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
  },

  // Frontend (React) config
  {
    files: ["frontend/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Common ignores
  {
    ignores: ["node_modules", "dist", "build"],
  },
];
