"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = require("express");
const get_user_1 = require("./get-user");
const get_user_board_1 = require("./get-user-board");
const router = express.Router();
exports.usersRouter = router;
router.get('/:userId', get_user_1.getUserHandler);
router.get('/:userId/board', get_user_board_1.getUserBoardHandler);
//# sourceMappingURL=index.js.map