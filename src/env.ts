require('dotenv').config()
import env from 'env-var'

export const PORT: number = env.get('PORT').default(3000).asPortNumber()
export const MONGODB_HOST: string = env
  .get('MONGODB_HOST')
  .required()
  .asString()
