"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cookie = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const redis = require("redis");
const connectRedis = require("connect-redis");
const connectMongo = require("connect-mongo");
const routes_1 = require("./routes");
const errors_1 = require("./utils/errors");
const database = require("./config/database/database");
const app = express();
/* Session Store */
const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();
const MongoStore = connectMongo(session);
/* Configuration */
dotenv.config();
database.connected;
/* Middleware */
app.use(cors());
app.use(cookie());
app.use(session({
    secret: process.env.SESSION_SECRET || 'htam00',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(errors_1.ErrorHandler);
/* Routes */
app.use('/vagas', routes_1.jobsRouter);
app.use('/user', routes_1.usersRouter);
exports.default = app;
//# sourceMappingURL=app.js.map