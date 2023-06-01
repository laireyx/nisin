module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',

    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
