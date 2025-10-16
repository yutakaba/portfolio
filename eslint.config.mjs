import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import pluginJsonc from 'eslint-plugin-jsonc';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.json'],
    plugins: {
      jsonc: pluginJsonc,
    },
    languageOptions: {
      parser: pluginJsonc.parsers.JSON,
    },
    rules: pluginJsonc.configs.recommended.rules,
  },
  prettier,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
