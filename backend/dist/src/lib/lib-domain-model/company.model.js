"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = void 0;
const Nedb = require("nedb");
class CompanyModel {
    constructor() {
        this.nedb = new Nedb('database/company.db');
        this.nedb.loadDatabase();
    }
    async getCompanyById(companyId) {
        return new Promise(async (resolve, reject) => {
            this.nedb.find({
                id: parseInt(companyId)
            }).exec((err, doc) => {
                if (err)
                    reject(err);
                if (doc.length === 0)
                    resolve([]);
                resolve(doc[0]);
            });
        });
    }
}
exports.CompanyModel = CompanyModel;
//# sourceMappingURL=company.model.js.map