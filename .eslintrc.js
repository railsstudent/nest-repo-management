module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-return-await": "off",
    "@typescript-eslint/return-await": "warn",
    'curly': 'error',
    'no-plusplus': ['warn', { 'allowForLoopAfterthoughts': true }],
    'max-classes-per-file': ['warn', 1],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['warn', {
      'ignore': [-1, 0, 1],
      'ignoreArrayIndexes': true,
      'ignoreEnums': true,
      'ignoreReadonlyClassProperties': true,
      'ignoreNumericLiteralTypes': true
    }],
    'no-param-reassign': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }]
  },
};
