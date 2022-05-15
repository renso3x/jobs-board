export declare const userService: () => {
    getUserProfile: (userId: string) => Promise<import("../../lib/model/user.entity").User>;
    getUserBoard: (userId: string) => Promise<Partial<import("../../lib/model/user-board.entity").UserBoard>[]>;
};
