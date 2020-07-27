"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connected = void 0;
const mongoose_1 = require("mongoose");
const DB_URI = process.env.MONGO_URI || '';
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
exports.connected = mongoose_1.connect(DB_URI, OPTIONS);
//# sourceMappingURL=database.js.map