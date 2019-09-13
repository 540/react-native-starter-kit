import { ApiUserRepository } from '../ApiUserRepository'
import { apiClient } from 'infrastructure/api/apiClient'
import { User } from 'domain/model/User/User'

describe('ApiUserRepository', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('finds comic by character id', async () => {
    jest.spyOn(apiClient, 'users').mockResolvedValue(usersDTO)

    const users = await ApiUserRepository.all()

    expect(users).toEqual([new User(1, 'Leanne Graham'), new User(2, 'Ervin Howell')])
  })
})

const usersDTO = [
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
]
