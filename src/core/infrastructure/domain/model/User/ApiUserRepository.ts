import { apiClient } from 'infrastructure/api/apiClient'
import { User } from 'domain/model/User/User'

const all = async (): Promise<User[]> => {
  const usersDTO: { id: string; name: string }[] = await apiClient.users()

  return usersDTO.map(userDTO => new User(userDTO.id, userDTO.name))
}

export const ApiUserRepository = {
  all
}
