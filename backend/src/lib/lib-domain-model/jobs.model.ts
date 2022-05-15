import * as Nedb from 'nedb'
import { Jobs } from '../model/jobs.entity';
import { getForthNight } from '../util/date';
import { CompanyModel } from './company.model';

export interface FilterOptions {
  limit: number,
  page: number,
  filterDate?: Date,
}

export class JobsModel {
  private nedb: Nedb
  private company: CompanyModel = new CompanyModel()

  constructor() {
    this.nedb = new Nedb('database/jobs.db')
    this.nedb.loadDatabase();
  }

  async getJobById(jobId: string): Promise<Jobs | undefined> {
    return new Promise(async (resolve, reject) => {
      this.nedb.find({
        id: parseInt(jobId)
      }).exec(async (err: Error, doc: {}) => {
        if (err) reject(err)

        const job = doc[0]
        const company = await this.company.getCompanyById(job.companyId.toString())

        resolve({ ...job, company })
      })
    })
  }

  async getAllJobs(filterOptions: Partial<FilterOptions>): Promise<Jobs[] | []> {
    const { limit, page, filterDate } = filterOptions
    const fortnight = getForthNight(filterDate || new Date())

    return new Promise(async (resolve, reject) => {
      this.nedb.find({
        dateCreated: {
          $lte: fortnight.end,
          $gte: fortnight.from
        }
      })
      .sort({ id: 1, dateCreated: 1 })
      .skip(page)
      .limit(limit)
      .exec(async(err: Error, doc: []) => {
        if (err) reject(err)

        if (doc.length === 0) resolve([])

        const jobBoard = Promise.all(doc.map(async (d: Jobs) => {
          const company = await this.company.getCompanyById(d.companyId.toString())
          return {
            ...d,
            company
          }
        }))

        resolve(jobBoard)
      })
    })
  }
}