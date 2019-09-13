import { UserRepository } from 'domain/model/User/UserRepository'

export const GetAllUsers = async () => UserRepository.all()
