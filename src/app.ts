import * as express from 'express';
import { 
	Application, 
	Request, 
	Response 
} from 'express';
import { json, urlencoded } from 'body-parser';
import * as session from 'express-session';
import * as cookie from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';

import * as JobsControllers from './controllers/jobs';

import * as database from './config/database/database';

const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();

const app: Application = express();

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
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (_, res: Response) => {
	res.send('');
})

app.post('/vagas', JobsControllers.addJob);

export default app;
