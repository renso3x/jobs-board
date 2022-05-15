import { User } from '../model/user.entity';
export declare class UserModel {
    private nedb;
    constructor();
    getUserProfile(userId: string): Promise<User | undefined>;
}
