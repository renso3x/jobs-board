import * as express from 'express'
import { usersRouter } from './routes/users'
import { jobsRouter } from './routes/jobs'

const router = express.Router()

router.use('/users', usersRouter)
router.use('/jobs', jobsRouter)

export default router