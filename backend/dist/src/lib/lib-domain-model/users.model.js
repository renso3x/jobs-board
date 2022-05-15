"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Nedb = require("nedb");
class UserModel {
    constructor() {
        this.nedb = new Nedb('database/users.db');
        this.nedb.loadDatabase();
    }
    async getUserProfile(userId) {
        return new Promise(async (resolve, reject) => {
            this.nedb.find({ id: parseInt(userId) }, (err, doc) => {
                if (err)
                    reject(err);
                if (doc.length === 0)
                    resolve(null);
                resolve(doc[0]);
            });
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=users.model.js.map