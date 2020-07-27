"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JobsSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String }
});
exports.default = mongoose_1.model("Jobs", JobsSchema);
//# sourceMappingURL=jobs.js.map