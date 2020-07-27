"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const session = require("express-session");
const cookie = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const redis = require("redis");
const connectRedis = require("connect-redis");
const database = require("./config/database/database");
const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();
const app = express();
dotenv.config();
database.connected;
app.use(cors());
app.use(cookie());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false },
    store: new RedisStore({
        client: RedisClient
    })
}));
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.get('/', (_, res) => {
    let users = [
        { name: "matheus", age: 23 },
        { name: "sheila", age: 23 },
    ];
    res.json(users);
});
app.get('/cookie', (req, res) => {
    res.send(req.cookies);
});
exports.default = app;
//# sourceMappingURL=app.js.map