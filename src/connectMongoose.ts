import mongoose from 'mongoose'
import { MONGODB_HOST } from './env'

export const connectMongoose = async () => {
  await mongoose.connect(MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
