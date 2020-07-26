"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
const server = http_1.createServer(app_1.default);
server.listen(PORT, () => console.log(`Running Server on port ${PORT}`));
//# sourceMappingURL=server.js.map