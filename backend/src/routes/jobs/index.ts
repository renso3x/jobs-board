import * as express from 'express'
import { getAllJobsHandler } from './get-jobs'

const router = express.Router()

router.get('/', getAllJobsHandler)

export { router as jobsRouter }