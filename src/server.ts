import { PORT } from './env'
import { router } from './rest'
import { createApp } from './app'
import { connectMongoose } from './connectMongoose'

async function init() {
  const app = createApp()
  app.use(router)

  await connectMongoose()

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
}

init()
