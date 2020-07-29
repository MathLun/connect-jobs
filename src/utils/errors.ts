import { Request, Response, NextFunction } from 'express';

export const ErrorHandler = (error, req: Request, res: Response, next: NextFunction) => {
	res.status(error.status || 500);
	res.json({ error: error });
}
