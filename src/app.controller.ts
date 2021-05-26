import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name?')
  getHelloName(@Param('name') name?: string): string {
    return this.appService.getHello(name)
  }

  @Get('good/:name?')
  getGoodName(@Param('name') name?: string): string {
    return this.appService.getGood(name)
  }
}
