import eslint from 'eslint';
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
      languageOptions: {
        globals: globals.browser,
      },
      plugins: {
        "react-hooks": pluginReactHooks,
      },
      rules: {
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react-hooks/rules-of-hooks": "error", // Enforces rules of hooks
        "react-hooks/exhaustive-deps": "warn", // Warn about missing deps in useEffect
      },
      ...pluginJs.configs.recommended,
      ...pluginReact.configs.recommended,
    },
  ],
};
