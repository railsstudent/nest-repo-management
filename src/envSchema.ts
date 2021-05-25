import * as Joi from 'joi'

const NUM_IPS = 500
const WINDOW_SIZE = 5
const MINUTE = 60

export const envSchema = Joi.object({
  PORT: Joi.number().required(),
  THROTTLE_TTL: Joi.number().default(WINDOW_SIZE * MINUTE),
  THROTTLE_LIMIT: Joi.number().default(NUM_IPS),
})
