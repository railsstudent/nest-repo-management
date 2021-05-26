import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication, Module } from '@nestjs/common'
import * as request from 'supertest'
import { AppService } from './../src/app.service'
import { AppController } from '../src/app.controller'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class TestAppModule {}

describe('AppController (e2e)', () => {
  let app: INestApplication

  const appService = {
    getHello(name = 'World'): string {
      return `Hello ${name} 2021!`
    },

    getGood(name = 'Morning'): string {
      return `Good ${name} 2021!`
    },
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestAppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('/hello/:name (GET)', () => {
    it('/hello (GET)', () => {
      return request(app.getHttpServer()).get('/hello').expect(HttpStatus.OK).expect('Hello World 2021!')
    })

    it('/hello/:name (GET)', () => {
      return request(app.getHttpServer()).get('/hello/John Doe').expect(HttpStatus.OK).expect('Hello John Doe 2021!')
    })
  })

  describe('/good/:name (GET)', () => {
    it('/good (GET)', () => {
      return request(app.getHttpServer()).get('/good/').expect(HttpStatus.OK).expect('Good Morning 2021!')
    })

    it('/good/:name (GET)', () => {
      return request(app.getHttpServer()).get('/good/Afternoon').expect(HttpStatus.OK).expect('Good Afternoon 2021!')
    })
  })
})
