import { FilterOptions } from "../../lib/lib-domain-model/jobs.model";
export declare const jobService: () => {
    getAllJobs: (filterOptions: Partial<FilterOptions>) => Promise<[] | import("../../lib/model/jobs.entity").Jobs[]>;
};
