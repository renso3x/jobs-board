"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobService = void 0;
const jobs_model_1 = require("../../lib/lib-domain-model/jobs.model");
const jobService = () => {
    const jobsModel = new jobs_model_1.JobsModel();
    const getAllJobs = async (filterOptions) => {
        return await jobsModel.getAllJobs(filterOptions);
    };
    return {
        getAllJobs
    };
};
exports.jobService = jobService;
//# sourceMappingURL=jobs.service.js.map