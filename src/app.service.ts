import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(name = 'World'): string {
    return `Hello ${name}!`
  }

  getGood(name = 'Morning'): string {
    return `Good ${name}!`
  }
}
