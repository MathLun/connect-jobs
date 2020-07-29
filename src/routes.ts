import { Router } from 'express';
import * as jobsControllers from './controllers/jobs';
import * as usersControllers from './controllers/users';
import { 
	signupCallback,
	middlewareAuthenticate
} from './controllers/users';


export const jobsRouter = Router();
export const usersRouter = Router();

jobsRouter.get('/', jobsControllers.getAll);
jobsRouter.get('/:id', jobsControllers.getOne);
jobsRouter.post('/create', jobsControllers.add);

usersRouter.post('/signup', usersControllers.signup, signupCallback);
usersRouter.post('/signin', usersControllers.signin);

usersRouter.get('/profile', middlewareAuthenticate, usersControllers.profile);

