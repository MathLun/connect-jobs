import Jobs from '../models/jobs';
import { Request, Response, NextFunction } from 'express';

export const addJob = async (req: Request, res: Response, next: NextFunction) => {
	const name = req.body['name'];
	const description = req.body['description'];
	const jobs = new Jobs({
		name: name,
		description: description
	});
	await jobs.save((err, job) => !err ? res.json(job) : console.log(err));
	res.end();
}

