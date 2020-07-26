"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (_, res) => {
    res.send('ConnectJobs');
});
exports.default = app;
//# sourceMappingURL=app.js.map