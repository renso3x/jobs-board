"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobsHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const jobs_service_1 = require("./jobs.service");
const getAllJobsHandler = async (req, res) => {
    const { query } = req;
    const limit = parseInt(query.limit);
    const page = parseInt(query.page);
    const filterOptions = {
        limit,
        page,
        filterDate: new Date(query.filterDate)
    };
    const jobs = await (0, jobs_service_1.jobService)().getAllJobs(filterOptions);
    return res.status(http_status_codes_1.StatusCodes.OK).send(jobs);
};
exports.getAllJobsHandler = getAllJobsHandler;
//# sourceMappingURL=get-jobs.js.map