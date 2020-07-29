"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = exports.jobsRouter = void 0;
const express_1 = require("express");
const jobsControllers = require("./controllers/jobs");
const usersControllers = require("./controllers/users");
const users_1 = require("./controllers/users");
exports.jobsRouter = express_1.Router();
exports.usersRouter = express_1.Router();
exports.jobsRouter.get('/', jobsControllers.getAll);
exports.jobsRouter.get('/:id', jobsControllers.getOne);
exports.jobsRouter.post('/create', jobsControllers.add);
exports.usersRouter.post('/signup', usersControllers.signup, users_1.signupCallback);
exports.usersRouter.post('/signin', usersControllers.signin);
exports.usersRouter.get('/profile', users_1.middlewareAuthenticate, usersControllers.profile);
//# sourceMappingURL=routes.js.map