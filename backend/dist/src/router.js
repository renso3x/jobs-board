"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = require("./routes/users");
const jobs_1 = require("./routes/jobs");
const router = express.Router();
router.use('/users', users_1.usersRouter);
router.use('/jobs', jobs_1.jobsRouter);
exports.default = router;
//# sourceMappingURL=router.js.map