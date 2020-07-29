import JobsService from '../models/jobs';
import { Request, Response, NextFunction } from 'express';

export const getAll = async (_: Request,  res: Response) => {
	const jobs = await JobsService.find();
	res.status(200).send(jobs);
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {

}

export const add = async (req: Request, res: Response, next: NextFunction) => {

	const name = req.body['name'];
	const description = req.body['description'];

	const jobs = new JobsService({
		name: name,
		description: description
	});

	await jobs.save((err, job) => 
	!err ? res.json(job) : console.log(err));

	res.end();
}

