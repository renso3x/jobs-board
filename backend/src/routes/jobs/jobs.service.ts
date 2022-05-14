import { JobsModel } from "../../lib/lib-domain-model/jobs.model"
import { FilterOptions } from "../../lib/lib-domain-model/jobs.model"

export const jobService = () => {
  const jobsModel: JobsModel = new JobsModel()

  const getAllJobs = async (filterOptions: Partial<FilterOptions>) => {
    return await jobsModel.getAllJobs(filterOptions)
  }

  return {
    getAllJobs
  }
}