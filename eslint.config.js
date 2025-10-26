const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: ['src/**/*.js'],
    ignores: ['**/tests/**', '**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-undef': 'error',

      'prefer-const': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-console': 'warn',

      complexity: ['warn', { max: 5 }],
    },
  },
]);
