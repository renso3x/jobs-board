import * as Nedb from 'nedb'
import { Company } from '../model/company.entity';

export class CompanyModel {
  private nedb: Nedb

  constructor() {
    this.nedb = new Nedb('database/company.db')
    this.nedb.loadDatabase();
  }

  async getCompanyById(companyId: string): Promise<Company | []> {
    return new Promise(async (resolve, reject) => {
      this.nedb.find({
        id: parseInt(companyId)
      }).exec((err: Error, doc: Company[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve([])

        resolve(doc[0])
      })
    })
  }
}