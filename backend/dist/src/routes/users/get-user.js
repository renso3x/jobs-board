"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const users_service_1 = require("./users.service");
const getUserHandler = async (req, res) => {
    const { params } = req;
    const userResponse = await (0, users_service_1.userService)().getUserProfile(params.userId);
    return res.status(http_status_codes_1.StatusCodes.OK).send(userResponse);
};
exports.getUserHandler = getUserHandler;
//# sourceMappingURL=get-user.js.map