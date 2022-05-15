import { Company } from '../model/company.entity';
export declare class CompanyModel {
    private nedb;
    constructor();
    getCompanyById(companyId: string): Promise<Company | []>;
}
