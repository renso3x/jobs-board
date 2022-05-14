import * as Nedb from 'nedb'
import { Jobs } from '../model/jobs.entity';

export interface FilterOptions {
  limit: number,
  page: number,
  startDate: Date,
  endDate: Date
}

export class JobsModel {
  private nedb: Nedb

  constructor() {
    this.nedb = new Nedb('database/jobs.db')
    this.nedb.loadDatabase();
  }

  async getAllJobs(filterOptions: Partial<FilterOptions>): Promise<Jobs[] | []> {
    const { limit, page, startDate, endDate } = filterOptions
    const fortnightAway = new Date(+new startDate - 12096e5);

    return new Promise(async (resolve, reject) => {
      this.nedb.find({}).sort({ id: 1 }).skip(page).limit(limit).exec((err: Error, doc: Jobs[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve([])

        resolve(doc)
      })
    })
  }
}