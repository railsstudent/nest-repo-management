import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto'
import { User } from './types'
import { v4 } from 'uuid'

/**
 * User service
 *
 * @class
 */
@Injectable()
export class UserService {
  /**
   * internal collection of users
   * @type {User}
   * @private
   */
  private users: User[]

  /**
   * Return all users
   *
   * @returns  all users
   */
  async getAll(): Promise<User[]> {
    return Promise.resolve(this.users)
  }

  /**
   * Return a user with matching user id
   *
   * @param {string} id - user id
   */
  async getUser(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id)
    if (!user) {
      throw new BadRequestException('User does not exist')
    }
    return Promise.resolve(user)
  }

  /**
   * Create a new user
   *
   * @param {CreateUserDto} dto - DTO of the new user
   * @returns   the new user
   */
  async addUser(dto: CreateUserDto): Promise<User> {
    const newUser: User = {
      ...dto,
      id: v4(),
    }
    this.users = [...this.users, newUser]
    return Promise.resolve(newUser)
  }
}
