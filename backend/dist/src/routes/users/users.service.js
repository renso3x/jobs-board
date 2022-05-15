"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const users_model_1 = require("../../lib/lib-domain-model/users.model");
const user_board_model_1 = require("../../lib/lib-domain-model/user-board.model");
const userService = () => {
    const userModel = new users_model_1.UserModel();
    const userBoardModel = new user_board_model_1.UserBoardModel();
    const getUserProfile = async (userId) => {
        return await userModel.getUserProfile(userId);
    };
    const getUserBoard = async (userId) => {
        return await userBoardModel.getUserBoard(userId);
    };
    return { getUserProfile, getUserBoard };
};
exports.userService = userService;
//# sourceMappingURL=users.service.js.map