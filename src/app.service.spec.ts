import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

describe('AppService', () => {
  let appService: AppService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    appService = app.get<AppService>(AppService)
  })

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!')
    })

    it('should return "Hello John!"', () => {
      expect(appService.getHello('John')).toBe('Hello John!')
    })
  })

  describe('getGood', () => {
    it('should return "Good Morning!"', () => {
      expect(appService.getGood()).toBe('Good Morning!')
    })

    it('should return "Good Afternoon!"', () => {
      expect(appService.getGood('Afternoon')).toBe('Good Afternoon!')
    })

    it('should return "Good Afternoon, John!"', () => {
      expect(appService.getGood('Afternoon', 'John')).toBe('Good Afternoon, John!')
    })
  })
})
