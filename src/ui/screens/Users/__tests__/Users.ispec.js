import { UserService } from 'services/User'
import { routes } from 'screens/routes'
import { renderScreen } from 'screens/__tests__/utils'
import { aUserCollection } from 'domain/model/User/__builders__/UserBuilder'

describe('Users', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('shows an error message', async () => {
    jest.spyOn(UserService, 'all').mockRejectedValue(new Error())

    const { findByText } = renderUsersScreen()

    expect(await findByText('Ha ocurrido un error. Por favor, vuelve a intentarlo.')).toBeDefined()
  })

  it('shows users list', async () => {
    jest.spyOn(UserService, 'all').mockResolvedValue(aUserCollection())

    const { findAllByTestId } = renderUsersScreen()

    expect(await findAllByTestId('user-item')).toHaveLength(2)
  })
})

const renderUsersScreen = () => {
  return renderScreen(routes.USERS)
}
