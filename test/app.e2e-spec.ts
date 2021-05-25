import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication, Module } from '@nestjs/common'
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

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello World 2021!')
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/John').expect(200).expect('Hello John 2021!')
  })
})
