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
   * @param {string} [greeting='Morning'] - greeting to the person
   * @param {string} [person=''] - name of the person
   * @returns 'Good Morning!' or 'Good greeting, name!' when greeting and person are provided
   *
   * @public
   */
  getGood(greeting = 'Morning', person = ''): string {
    return `Good ${greeting}${person ? `, ${person}` : ''}!`
  }
}
