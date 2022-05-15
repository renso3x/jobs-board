import { UserBoard } from '../model/user-board.entity';
export declare class UserBoardModel {
    private nedb;
    private userDb;
    private jobDb;
    constructor();
    getUserBoard(userId: string): Promise<Partial<UserBoard>[] | undefined>;
}
