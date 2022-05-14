import * as express from 'express'
import { getUserHandler } from './get-users'

const router = express.Router()

router.get('/:userId', getUserHandler)

export { router as usersRouter }