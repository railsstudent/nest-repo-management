import { Gender } from '../types'

/**
 * Create User DTO
 * @class
 */
export class CreateUserDto {
  /**
   *   first name of new user
   */
  firstname: string

  /**
   *   lastname - last name of new user
   */
  lastname: string

  /**
   * age - age of new user
   */
  age: number

  /**
   *  gender - gender of new user
   */
  gender: Gender
}
