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

    getGood(greeting = 'Morning', person = ''): string {
      return `Good ${greeting} 2021${person ? `, ${person}` : ''}!`
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

  describe('/good/:greeting (GET)', () => {
    it('/good (GET)', () => {
      return request(app.getHttpServer()).get('/good/morning').expect(HttpStatus.OK).expect('Good morning 2021!')
    })

    it('/good/:greeting/:name (GET)', () => {
      return request(app.getHttpServer())
        .get('/good/afternoon/Peter')
        .expect(HttpStatus.OK)
        .expect('Good afternoon 2021, Peter!')
    })
  })
})
