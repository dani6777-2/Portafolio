import { ESLint } from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist'], // Ignora la carpeta de salida 'dist'
  },
  {
    files: ['**/*.{ts,tsx}'], // Solo archivos TypeScript
    languageOptions: {
      ecmaVersion: 2020, // Versión de ECMAScript que quieres usar
      globals: globals.browser, // Añade variables globales del navegador
    },
    extends: [
      'eslint:recommended', // Extiende las reglas recomendadas de ESLint
      ...tsConfigs.recommended, // Reglas recomendadas para TypeScript
    ],
    plugins: {
      'react-hooks': reactHooks, // Plugin para hooks de React
      'react-refresh': reactRefresh, // Plugin para React Refresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas para hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Regla para exportaciones en React Refresh
    },
  },
];