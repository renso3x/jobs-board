import * as express from 'express'
import { getUserHandler } from './get-user'
import { getUserBoardHandler } from './get-user-board'

const router = express.Router()

router.get('/:userId', getUserHandler)
router.get('/:userId/board', getUserBoardHandler)

export { router as usersRouter }