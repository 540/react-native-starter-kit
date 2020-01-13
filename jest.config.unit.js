'use strict'

var config = require('./jest.config')
config.testRegex = '/__tests__/.*\\.spec\\.(ts|js)$'
config.setupFilesAfterEnv = ['./setupJestUnit.js']

console.log('RUNNING UNIT TESTS')

module.exports = config
