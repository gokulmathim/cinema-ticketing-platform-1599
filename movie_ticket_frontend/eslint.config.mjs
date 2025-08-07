import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// PUBLIC_INTERFACE
// ESLint config for Astro project -- ignores build dirs/dist and .astro types
export default [
  js.configs.recommended,

  // TypeScript support
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // JS files config (same as before)
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': ['error', 'always'],
    },
  },

  // Ignore build output and generated type folders
  {
    ignores: [
      'dist/**',
      '.astro/**',
    ],
  },
];
