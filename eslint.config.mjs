import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat"; // Prettier

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: [
      "js/recommended"
    ],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",
      curly: "error",
    },

    rules: {
      // --- Quality ---
      "no-unused-vars": "warn", //Warn if variables/imports aren't used
      "no-undef": "error", //Disallow using undefined variables
      "no-console": "off", // Allow console.log(can set to "warn" in prod)
      "no-redeclare": "error", // Prevent accidentally re-declaring vars
      "consistent-return": "warn", // Functions should always return consistently

      // --- Best Practices ---
      eqeqeq: "error", // Always use === instead of ==
      curly: "error", // Always use curly braces with if/else
      "prefer-const": "warn", // Prefer const over let if not reassigned
      "no-var": "error", // Disallow var (use let/const instead)
      "dot-notation": "warn", // Prefer obj.prop over obj["prop"]

      // --- Style ---
      semi: ["error", "always"], // Always end with ;
      quotes: ["error", "double"], //Enforce double quotes for strings
      indent: ["error", 4], // 4 spaces indentation
      "comma-dangle": ["error", "always-multiline"], // Consistent commas
      "object-curly-spacing": ["error", "always"], // {space inside braces}
    },
  },
  eslintConfigPrettier,
]);
