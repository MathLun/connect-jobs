import * as express from 'express';
import { Application, Response } from 'express';

const app: Application = express();

app.get('/', (_, res: Response) => {
	res.send('ConnectJobs');
})

export default app;
