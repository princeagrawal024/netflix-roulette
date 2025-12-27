// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  // ------------------------------------------------------------
  // GLOBAL IGNORE
  // ------------------------------------------------------------
  {
    ignores: [
      "**/dist/**",
      "**/.storybook/**",
      "**/cypress/**",
      "**/__mocks__/**",
      "**/test/**",
      "**/vite.config.js",
    ],
  },

  // ------------------------------------------------------------
  // JS BASE CONFIG
  // ------------------------------------------------------------
  js.configs.recommended,

  // ------------------------------------------------------------
  // REACT (flat)
  // ------------------------------------------------------------
  react.configs.flat.recommended,

  // ------------------------------------------------------------
  // STORYBOOK (NOT flat → MUST convert using compat)
  // ------------------------------------------------------------
  ...compat.extends("plugin:storybook/recommended"),

  // ------------------------------------------------------------
  // TYPESCRIPT (TYPE-AWARE MANUAL STRICT RULES)
  // ------------------------------------------------------------
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-refresh": reactRefresh,
    },
    rules: {
      // ⭐ Type-aware strict rules (manual, for v8)
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
    },
  },

  // ------------------------------------------------------------
  // HOOKS + FAST REFRESH
  // ------------------------------------------------------------
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "error",
    },
  },

  // ------------------------------------------------------------
  // CUSTOM RULES (YOUR OLD CONFIG)
  // ------------------------------------------------------------
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-one-prop-per-line": "off",
      "react/jsx-max-props-per-line": ["error", { maximum: 3 }],
      "storybook/no-renderer-packages": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
