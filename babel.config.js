module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          domain: ['./src/core/domain'],
          infrastructure: ['./src/core/infrastructure'],
          services: ['./src/core/services'],
          screens: ['./src/ui/screens'],
          components: ['./src/ui/components'],
          theme: ['./src/ui/theme']
        }
      }
    ]
  ]
}
