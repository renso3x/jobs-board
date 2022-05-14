import * as Nedb from 'nedb'
import { User } from '../model/user.entity';

export class UserModel {
  private nedb: Nedb

  constructor() {
    this.nedb = new Nedb('database/users.db')
    this.nedb.loadDatabase();
  }

  async getUserProfile(userId: string): Promise<User | undefined> {
    return new Promise(async (resolve, reject) => {
      this.nedb.find({ id: parseInt(userId) }, (err: Error, doc: User[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve(null)

        resolve(doc[0])
      })
    })
  }
}