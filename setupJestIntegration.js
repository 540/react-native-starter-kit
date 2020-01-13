import { NativeModules } from 'react-native'
import { mockReactNativeLocalize } from './src/core/infrastructure/__mocks__/mockReactNativeLocalize'

jest.mock('react-native-localize', () => mockReactNativeLocalize)

jest.mock('react-native/Libraries/Utilities/NativePlatformConstantsIOS', () => ({
  ...require.requireActual('react-native/Libraries/Utilities/NativePlatformConstantsIOS'),
  getConstants: () => ({
    forceTouchAvailable: false,
    interfaceIdiom: 'en',
    isTesting: false,
    osVersion: 'ios',
    reactNativeVersion: { major: 60, minor: 1, patch: 0 },
    systemName: 'ios'
  })
}))

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
