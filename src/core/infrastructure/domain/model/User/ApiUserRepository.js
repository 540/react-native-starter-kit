import { apiClient } from 'infrastructure/api/apiClient'
import { User } from 'domain/model/User/User'

const all = async () => {
  const usersDTO = await apiClient.users()

  return usersDTO.map(userDTO => new User(userDTO.id, userDTO.name))
}

export const ApiUserRepository = {
  all
}
