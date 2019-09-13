import { server } from './server'
import { Platform } from 'components/_base'

const apiServer = () =>
  server().baseUrl(Platform.select({ ios: 'http://localhost:8080', android: 'http://10.0.2.2:8080' }))

export const apiClient = {
  users: () =>
    apiServer()
      .url('/users')
      .get()
}
