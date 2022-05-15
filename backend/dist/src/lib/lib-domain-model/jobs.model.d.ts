import { Jobs } from '../model/jobs.entity';
export interface FilterOptions {
    limit: number;
    page: number;
    filterDate?: Date;
}
export declare class JobsModel {
    private nedb;
    private company;
    constructor();
    getJobById(jobId: string): Promise<Jobs | undefined>;
    getAllJobs(filterOptions: Partial<FilterOptions>): Promise<Jobs[] | []>;
}
