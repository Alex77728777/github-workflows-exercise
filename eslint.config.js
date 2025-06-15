// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];

