import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { jobService } from './jobs.service'
import { FilterOptions } from 'src/lib/lib-domain-model/jobs.model'
const getAllJobsHandler = async (req: Request, res: Response) => {
  const { query } = req
  const limit = parseInt(query.limit as string)
  const page = parseInt(query.page as string)
  const filterOptions: FilterOptions = {
    limit,
    page,
    filterDate: new Date(query.filterDate as string)
  }
  const jobs = await jobService().getAllJobs(filterOptions)

  return res.status(StatusCodes.OK).send(jobs)
}

export { getAllJobsHandler }