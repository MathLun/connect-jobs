"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsRouter = void 0;
const express_1 = require("express");
const JobsControllers = require("./controllers/jobs");
exports.jobsRouter = express_1.Router();
exports.jobsRouter.post('/vagas', JobsControllers.add);
//# sourceMappingURL=routes.js.map