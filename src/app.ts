import * as express from 'express';
import { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import * as mongoose from 'mongoose';
import * as session from 'express-session';
import * as cookie from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';
import * as connectMongo  from 'connect-mongo';

import { jobsRouter } from './routes';
import * as database from './config/database/database';

/* Session Store */
const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();
const MongoStore = connectMongo(session);

const app: Application = express();

/* Configuration */
dotenv.config();
database.connected;

/* Middleware */
app.use(cors());
app.use(cookie());
app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: true,
	resave: false,
	cookie: { secure: false },
	store: new MongoStore({
	 mongooseConnection: mongoose.connection
	})

}));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', jobsRouter);

export default app;
