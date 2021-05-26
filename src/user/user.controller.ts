import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common'
import { CreateUserDto } from './dto'
import { User } from './types'
import { UserService } from './user.service'

/**
 *  User Controller
 *  @class
 */
@Controller('user')
export class UserController {
  /**
   * Create user controller
   *
   *  @param service {UserService} - user service
   */
  constructor(private service: UserService) {}

  /**
   * Return all users
   *
   * @returns all the users
   */
  @Get('all')
  async getUsers(): Promise<User[]> {
    return this.service.getAll()
  }

  /**
   * Return a user with matching user id
   *
   * @param {string} id - user id
   * @returns a user with matching user id
   */
  @Get(':id')
  async getUser(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.service.getUser(id)
  }

  /**
   * Create a new user
   *
   * @param {CreateUserDto} dto - DTO of new user
   * @returns the new user
   */
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.service.addUser(dto)
  }
}
