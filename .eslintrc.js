module.exports = {
  root: true,
  plugins: ['import', 'jest', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'import/no-default-export': 2,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  env: {
    'jest/globals': true
  },
  parser: '@typescript-eslint/parser'
}
