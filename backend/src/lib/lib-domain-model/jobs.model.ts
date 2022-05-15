import * as Nedb from 'nedb'
import { Jobs } from '../model/jobs.entity';
import { getForthNight } from '../util/date';

export interface FilterOptions {
  limit: number,
  page: number,
  filterDate?: Date,
}

export class JobsModel {
  private nedb: Nedb

  constructor() {
    this.nedb = new Nedb('database/jobs.db')
    this.nedb.loadDatabase();
  }

  async getAllJobs(filterOptions: Partial<FilterOptions>): Promise<Jobs[] | []> {
    console.log(filterOptions)
    const { limit, page, filterDate } = filterOptions
    const fortnight = getForthNight(filterDate || new Date())

    return new Promise(async (resolve, reject) => {
      this.nedb.find({
        dateCreated: {
          $lte: fortnight.end,
          $gte: fortnight.from
        }
      }).sort({ id: 1, dateCreated: 1 }).skip(page).limit(limit).exec((err: Error, doc: Jobs[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve([])

        resolve(doc)
      })
    })
  }
}