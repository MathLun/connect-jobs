import * as express from 'express';
import { Application, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (_, res: Response) => {
	let users = [
		{ name: "matheus", age: 23 },
		{ name: "sheila", age: 23 },
	];
	res.json(users);
})

export default app;
