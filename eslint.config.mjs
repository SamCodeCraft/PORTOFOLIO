import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import pkg from "@eslint/js";


const { configs: jsConfigs } = pkg;

/** @type {import('eslint').Linter.Config} */
const config = [
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,              
      "react-hooks": pluginReactHooks,
    },
    rules: {      // Extends removed, spreading rules
      ...jsConfigs.recommended.rules,
      ...pluginReact.configs.recommended.rules, // Spread recommended rules
      "no-unused-vars": "warn",      
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default config;

