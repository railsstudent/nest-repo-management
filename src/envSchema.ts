import * as Joi from 'joi'

/**
 *  Number of IPS
 */
const NUM_IPS = 500

/**
 *  rate limit window size
 */
const WINDOW_SIZE = 5

/**
 *  1 minute has 60 seconds
 */
const MINUTE = 60

/**
 *  Ceate Joi object to validate environmen files
 */
export const envSchema = Joi.object({
  PORT: Joi.number().required(),
  THROTTLE_TTL: Joi.number().default(WINDOW_SIZE * MINUTE),
  THROTTLE_LIMIT: Joi.number().default(NUM_IPS),
})
