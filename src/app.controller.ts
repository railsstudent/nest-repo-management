import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

/**
 *  App Controller that routes requests to app service
 */
@Controller()
export class AppController {
  /**
   * Create App Controller
   *
   * @param appService {AppService} - app service class
   *
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Returns Hello World! or Hello name!
   *
   * @param {string} name - name of the thing
   * @returns 'Hello World!' or 'Hello  name!' when name is provided
   *
   * @public
   */
  @Get('hello/:name?')
  getHelloName(@Param('name') name?: string): string {
    return this.appService.getHello(name)
  }

  /**
   * Returns a greeting to a person
   *
   * @param {string} greeting - greeting to the person
   * @param {string} name - name of the person
   * @returns 'Good greeting!' or 'Good greeting, name!' when greeting and name are provided
   *
   * @public
   */
  @Get('good/:greeting/:name?')
  getGoodName(@Param('greeting') greeting: string, @Param('name') name?: string): string {
    return this.appService.getGood(greeting, name)
  }
}
