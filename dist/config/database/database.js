"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connected = void 0;
const mongoose_1 = require("mongoose");
const DB_URI = process.env.MONGO_URI || 'mongodb://mathlun:zurik21__@ds161312.mlab.com:61312/connect-jobs';
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
exports.connected = mongoose_1.connect(DB_URI, OPTIONS);
//# sourceMappingURL=database.js.map