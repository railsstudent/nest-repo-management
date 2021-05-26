import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication, Module } from '@nestjs/common'
import * as request from 'supertest'
import { UserController } from '../src/user/user.controller'
import { UserService } from '../src/user/user.service'
import { Gender, User } from '../src/user/types'
import { CreateUserDto } from '../src/user/dto'
import { v4 } from 'uuid'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class TestAppModule {}

const newId = v4()

describe('UserController (e2e)', () => {
  let app: INestApplication

  const userService = {
    getAll(): User[] {
      return []
    },

    /**
     * Return a user with matching user id
     *
     * @param {string} id - user id
     */
    getUser(id: string): User {
      return {
        id,
        firstname: 'John',
        lastname: 'Doe',
        age: 15,
        gender: Gender.MALE,
      }
    },

    /**
     * Create a new user
     *
     * @param {CreateUserDto} dto - DTO of the new user
     * @returns   the new user
     */
    addUser(dto: CreateUserDto): User {
      const newUser: User = {
        ...dto,
        id: newId,
      }
      return newUser
    },
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestAppModule],
    })
      .overrideProvider(UserService)
      .useValue(userService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('/user/all (GET)', () => {
    it('/user/all (GET)', () => {
      return request(app.getHttpServer()).get('/user/all').expect(HttpStatus.OK).expect([])
    })
  })

  describe('/user/:id (GET)', () => {
    it('/user/:id (GET)', () => {
      const id = v4()
      return request(app.getHttpServer()).get(`/user/${id}`).expect(HttpStatus.OK).expect({
        id,
        firstname: 'John',
        lastname: 'Doe',
        age: 15,
        gender: 'Male',
      })
    })
  })

  describe('/user (POST)', () => {
    it('/user/:id (POST)', () => {
      const dto: CreateUserDto = {
        firstname: 'Jane',
        lastname: 'Doe',
        age: 25,
        gender: Gender.BINARY,
      }
      return request(app.getHttpServer())
        .post(`/user`)
        .send(dto)
        .expect(HttpStatus.CREATED)
        .expect({
          ...dto,
          id: newId,
        })
    })
  })
})
