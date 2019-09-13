import { mockReactNativeLocalize } from './src/core/infrastructure/__mocks__/mockReactNativeLocalize'

jest.mock('react-native-localize', () => mockReactNativeLocalize)
