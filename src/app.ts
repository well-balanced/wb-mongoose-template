import express from 'express'
import { json, urlencoded } from 'body-parser'

export function createApp() {
  const app = express()

  app.use(json())
  app.use(urlencoded({ extended: true }))

  return app
}
