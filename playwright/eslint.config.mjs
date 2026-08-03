import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: globals.node 
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-multi-spaces": "warn",
      "eqeqeq": "error",
      "curly": "error",
      "no-trailing-spaces": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    },
    ignores: ["node_modules/", "playwright-report/*", "playwright-report/**/*", "playwright-report/**/**/*", "playwright-report/**/**/**/*", "playwright-report/**/**/**/**/*"]
  },
]);
