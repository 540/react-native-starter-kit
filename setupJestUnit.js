import { mockReactNativeLocalize } from './src/core/infrastructure/__mocks__/mockReactNativeLocalize'

global.fetch = require('jest-fetch-mock')

jest.mock('react-native-localize', () => mockReactNativeLocalize)
