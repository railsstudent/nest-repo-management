import { Injectable } from '@nestjs/common'

/**
 * App service
 */
@Injectable()
export class AppService {
  /**
   * Returns Hello World! or Hello name!
   *
   * @param {string} [name='World']  - name of the thing
   * @returns 'Hello World!' or 'Hello  name!' when name is provided
   *
   * @public
   */
  getHello(name = 'World'): string {
    return `Hello ${name}!`
  }

  /**
   * Returns Good Morning! or Good name!
   *
   * @param {string} [name='Morning'] - name of the thing
   * @returns 'Good Morning!' or 'Good name!' when name is provided
   *
   * @public
   */
  getGood(name = 'Morning'): string {
    return `Good ${name}!`
  }
}
