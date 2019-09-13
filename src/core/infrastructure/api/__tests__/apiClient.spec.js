import { apiClient } from '../apiClient'
import usersFixture from './__fixtures__/usersFixture.json'

describe('apiClient', () => {
  afterEach(async () => {
    jest.resetAllMocks()
    fetch.resetMocks()
  })

  it('makes fleetInRegion request and parses response', async () => {
    fetch.mockResponse(JSON.stringify(usersFixture))

    const users = await apiClient.users()

    expect(users).toEqual([
      {
        id: 1,
        address: {
          city: 'Gwenborough',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          },
          street: 'Kulas Light',
          suite: 'Apt. 556',
          zip_code: '92998-3874'
        },
        company: {
          description: 'Multi-layered client-server neural-net',
          name: 'Romaguera-Crona'
        },
        email: 'Sincere@april.biz',
        name: 'Leanne Graham',
        phone: '1-770-736-8031 x56442',
        username: 'Bret',
        website: 'hildegard.org'
      },
      {
        id: 2,
        address: {
          city: 'Wisokyburgh',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618'
          },
          street: 'Victor Plains',
          suite: 'Suite 879',
          zip_code: '90566-7771'
        },
        company: {
          description: 'Proactive didactic contingency',
          name: 'Deckow-Crist'
        },
        email: 'Shanna@melissa.tv',
        name: 'Ervin Howell',
        phone: '010-692-6593 x09125',
        username: 'Antonette',
        website: 'anastasia.net'
      }
    ])
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/users'), expect.objectContaining({ method: 'GET' }))
  })
})
