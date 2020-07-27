import { Router } from 'express';
import * as JobsControllers from './controllers/jobs';

export const jobsRouter = Router();

jobsRouter.post('/vagas', JobsControllers.add);

