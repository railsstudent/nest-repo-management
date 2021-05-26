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
   * Returns Good Morning! or Good name!
   *
   * @param {string} name - name of the thing
   * @returns 'Good Morning!' or 'Good name!' when name is provided
   *
   * @public
   */
  @Get('good/:name?')
  getGoodName(@Param('name') name?: string): string {
    return this.appService.getGood(name)
  }
}
