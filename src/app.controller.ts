import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  /**
   *
   * @param appService {AppService} - app service class
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Returns Hello World! or Hello name!
   *
   * @remarks
   * This endpoint is part of [[AppModule]]
   *
   * @param name - name of the thing
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
   * @remarks
   * This endpoint is part of [[AppModule]]
   *
   * @param name - name of the thing
   * @returns 'Good Morning!' or 'Good name!' when name is provided
   *
   * @public
   */ @Get('good/:name?')
  getGoodName(@Param('name') name?: string): string {
    return this.appService.getGood(name)
  }
}
