'use strict'

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^domain/(.*)$': '<rootDir>/src/core/domain/$1',
    '^infrastructure/(.*)$': '<rootDir>/src/core/infrastructure/$1',
    '^services/(.*)$': '<rootDir>/src/core/services/$1',
    '^screens/(.*)$': '<rootDir>/src/ui/screens/$1',
    '^theme': '<rootDir>/src/ui/theme',
    '^components/(.*)$': '<rootDir>/src/ui/components/$1'
  },
  setupFilesAfterEnv: ['./setupJest.js'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|react-navigation|@react-navigation))']
}
