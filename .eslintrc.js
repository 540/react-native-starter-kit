module.exports = {
  root: true,
  plugins: ['import', 'jest'],
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jest/recommended'
  ],
  rules: {
    'import/no-default-export': 2
  },
  env: {
    'jest/globals': true
  }
}
