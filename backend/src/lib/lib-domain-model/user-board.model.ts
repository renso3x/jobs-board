import * as Nedb from 'nedb'
import { UserBoard } from '../model/user-board.entity';
import { JobsModel } from './jobs.model';

import { UserModel } from './users.model';

export class UserBoardModel {
  private nedb: Nedb
  private userDb: UserModel = new UserModel()
  private jobDb: JobsModel = new JobsModel()

  constructor() {
    this.nedb = new Nedb('database/user-board.db')
    this.nedb.loadDatabase();
  }

  async getUserBoard(userId: string): Promise<Partial<UserBoard>[] | undefined> {
    return new Promise(async (resolve, reject) => {
      this.nedb.find({ userId }, async (err: Error, doc: Partial<UserBoard>[]) => {
        if (err) reject(err)

        if (doc.length === 0) resolve(null)

        const myBoard = Promise.all(doc.map(async board => {
          const user = await this.userDb.getUserProfile(board.userId.toString())
          const job = await this.jobDb.getJobById(board.jobId.toString())

          return {
            ...board,
            job,
            user
          }
        }))

        resolve(myBoard)
      })
    })
  }

}