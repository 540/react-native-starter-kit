import { NativeModules } from 'react-native'
import { mockReactNativeLocalize } from './src/core/infrastructure/__mocks__/mockReactNativeLocalize'

jest.mock('react-native-localize', () => mockReactNativeLocalize)

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {}
}

NativeModules.PlatformConstants = {
  forceTouchAvailable: false
}
