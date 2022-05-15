import * as Nedb from 'nedb'
import { UserBoard } from '../model/user-board.entity';

export class UserBoardModel {
  private nedb: Nedb

  constructor() {
    this.nedb = new Nedb('database/user-board.db')
    this.nedb.loadDatabase();
  }

  async getUserBoard(userId: string): Promise<Partial<UserBoard>[] | undefined> {
    return new Promise(async (resolve, reject) => {
      this.nedb.find({ userId }, async (err: Error, doc: UserBoard[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve(null)
        resolve(doc)
      })
    })
  }
}