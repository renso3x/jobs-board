"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModel = void 0;
const Nedb = require("nedb");
const date_1 = require("../util/date");
const company_model_1 = require("./company.model");
class JobsModel {
    constructor() {
        this.company = new company_model_1.CompanyModel();
        this.nedb = new Nedb('database/jobs.db');
        this.nedb.loadDatabase();
    }
    async getJobById(jobId) {
        return new Promise(async (resolve, reject) => {
            this.nedb.find({
                id: parseInt(jobId)
            }).exec(async (err, doc) => {
                if (err)
                    reject(err);
                const job = doc[0];
                const company = await this.company.getCompanyById(job.companyId.toString());
                resolve(Object.assign(Object.assign({}, job), { company }));
            });
        });
    }
    async getAllJobs(filterOptions) {
        const { limit, page, filterDate } = filterOptions;
        const fortnight = (0, date_1.getForthNight)(filterDate || new Date());
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
                .exec(async (err, doc) => {
                if (err)
                    reject(err);
                if (doc.length === 0)
                    resolve([]);
                const jobBoard = await Promise.all(doc.map(async (d) => {
                    const company = await this.company.getCompanyById(d.companyId.toString());
                    return Object.assign(Object.assign({}, d), { company });
                }));
                resolve(jobBoard);
            });
        });
    }
}
exports.JobsModel = JobsModel;
//# sourceMappingURL=jobs.model.js.map