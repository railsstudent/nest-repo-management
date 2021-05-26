import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController
  let appService: AppService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appService = app.get<AppService>(AppService)
    appController = app.get<AppController>(AppController)
  })

  describe('getHelloName', () => {
    it('should return "Hello World!"', () => {
      jest.spyOn(appService, 'getHello').mockImplementation((name = 'World') => `Hello ${name}!`)

      expect(appController.getHelloName()).toBe('Hello World!')
    })

    it('should return "Hello John!"', () => {
      jest.spyOn(appService, 'getHello').mockImplementation((name = 'World') => `Hello ${name}!`)

      expect(appController.getHelloName('John')).toBe('Hello John!')
    })
  })

  describe('getGoodName', () => {
    it('should return "Good morning!"', () => {
      jest
        .spyOn(appService, 'getGood')
        .mockImplementation((greeting?: string, person = '') => `Good ${greeting}${person ? `, ${person}` : ''}!`)

      expect(appController.getGoodName('morning')).toBe('Good morning!')
    })

    it('should return "Good afternoon, John!"', () => {
      jest
        .spyOn(appService, 'getGood')
        .mockImplementation((greeting?: string, person = '') => `Good ${greeting}${person ? `, ${person}` : ''}!`)

      expect(appController.getGoodName('afternoon', 'John')).toBe('Good afternoon, John!')
    })
  })
})
