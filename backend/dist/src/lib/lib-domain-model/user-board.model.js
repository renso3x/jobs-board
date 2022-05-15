"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBoardModel = void 0;
const Nedb = require("nedb");
const jobs_model_1 = require("./jobs.model");
const users_model_1 = require("./users.model");
class UserBoardModel {
    constructor() {
        this.userDb = new users_model_1.UserModel();
        this.jobDb = new jobs_model_1.JobsModel();
        this.nedb = new Nedb('database/user-board.db');
        this.nedb.loadDatabase();
    }
    async getUserBoard(userId) {
        return new Promise(async (resolve, reject) => {
            this.nedb.find({ userId }, async (err, doc) => {
                if (err)
                    reject(err);
                if (doc.length === 0)
                    resolve(null);
                const myBoard = await Promise.all(doc.map(async (board) => {
                    const user = await this.userDb.getUserProfile(board.userId.toString());
                    const job = await this.jobDb.getJobById(board.jobId.toString());
                    return Object.assign(Object.assign({}, board), { job,
                        user });
                }));
                resolve(myBoard);
            });
        });
    }
}
exports.UserBoardModel = UserBoardModel;
//# sourceMappingURL=user-board.model.js.map