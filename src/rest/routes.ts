import { Router } from 'express'
import { root } from './controllers'

export const router = Router()

router.get('/', root)
