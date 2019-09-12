module.exports = {
  root: true,
  plugins: ['import'],
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  rules: {
    'import/no-default-export': 2
  }
}
