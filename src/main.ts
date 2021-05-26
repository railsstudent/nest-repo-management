import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as helmet from 'helmet'
import * as express from 'express'
import compression = require('compression')

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(compression())
  app.use(helmet())
  const configService = app.get(ConfigService)
  const port = configService.get<number>('PORT', 0)
  await app.listen(port)
}
bootstrap()
