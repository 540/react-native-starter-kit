'use strict'

var config = require('./jest.config')
config.testRegex = '\\.ispec\\.(ts|tsx|js)$'
config.setupFilesAfterEnv = ['@testing-library/react-native/cleanup-after-each', './setupJestIntegration.js']
config.preset = '@testing-library/react-native'

console.log('RUNNING INTEGRATION TESTS')

module.exports = config
