"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJob = void 0;
const jobs_1 = require("../models/jobs");
exports.addJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body['name'];
    const description = req.body['description'];
    const jobs = new jobs_1.default({
        name: name,
        description: description
    });
    yield jobs.save((err, job) => !err ? res.json(job) : console.log(err));
    res.end();
});
//# sourceMappingURL=jobs.js.map