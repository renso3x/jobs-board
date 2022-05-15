"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsRouter = void 0;
const express = require("express");
const get_jobs_1 = require("./get-jobs");
const router = express.Router();
exports.jobsRouter = router;
router.get('/', get_jobs_1.getAllJobsHandler);
//# sourceMappingURL=index.js.map