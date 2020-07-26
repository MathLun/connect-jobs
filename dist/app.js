"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.get('/', (_, res) => {
    let users = [
        { name: "matheus", age: 23 },
        { name: "sheila", age: 23 },
    ];
    res.json(users);
});
exports.default = app;
//# sourceMappingURL=app.js.map