import { Handler } from 'express'

export const root: Handler = (_, res) => {
  res.send({
    name: '@well-balanced-mongoose',
    uptime: process.uptime(),
  })
}
