/**
 * Gender enum
 */
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  BINARY = 'Binary',
}

/**
 * User interface
 *
 * @typedef User
 * @type {object}
 * @property {string | null} id - user id.
 * @property {string} firstname - user's first name.
 * @property {string} lastname - user's last name.
 * @property {number} age - user's age
 * @property {gender} gender - user's gender
 */
export interface User {
  /** user id */
  id: string | null
  /** first name of user  */
  firstname: string
  /** last name of user  */
  lastname: string
  /** age of user  */
  age: number
  /** gender of user  */
  gender: Gender
}
