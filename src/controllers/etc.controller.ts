import { Handler } from 'express'
import { findUser } from 'services/user'

export const root: Handler = async (_, res) => {
  const user = await findUser(1)

  res.send({
    name: '@well-balanced-mongoose',
    uptime: process.uptime(),
    msg: `Hello, ${user.name}!`,
  })
}
