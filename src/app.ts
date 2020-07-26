import * as express from 'express';
import { Application, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import * as session from 'express-session';
import * as cookie from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();

const app: Application = express();

dotenv.config();

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
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (_, res: Response) => {
	let users = [
		{ name: "matheus", age: 23 },
		{ name: "sheila", age: 23 },
	];
	res.json(users);
})

app.get('/cookie', (req: Request, res: Response) => {
	res.send(req.cookies);
})

export default app;
