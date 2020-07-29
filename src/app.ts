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

import { jobsRouter, 
	 usersRouter } from './routes';

import { ErrorHandler } from './utils/errors';
import * as database from './config/database/database';
import * as passport from './config/passport/passport';

const app: Application = express();

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
app.use(urlencoded({ extended: true }));

app.use(ErrorHandler);

/* Routes */
app.use('/vagas', jobsRouter);
app.use('/user', usersRouter);

export default app;
