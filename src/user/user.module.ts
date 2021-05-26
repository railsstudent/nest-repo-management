import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'

/**
 * User module that stores user profile
 */
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
