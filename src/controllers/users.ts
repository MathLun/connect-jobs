import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const signupCallback = async (req: Request, res: Response, next: NextFunction) => {
	res.json({
		message: 'Signup successful!',
		user: req.user
	});
}

export const signup = passport.authenticate('signup', { session: false })


export const signin = async (req: Request, res: Response, next: NextFunction) => {
 passport.authenticate('signin', async (err, user, info) => {
	try {
	  if(err || !user) {
		  const error = new Error('An Error aki');
		  return next(error);
	  }
	  req.login(user, { session: false }, async (error) => {
		  if(error) { return next(error); }
		  const body = { _id: user._id, email: user.email };
		  const token = jwt.sign({ user: body }, 'htam00');
		  return res.json({ token });
	  });
	} catch (error) {
		return next(error);
	}
 })(req, res, next);
}

export const profile = (req: Request, res: Response,  next: NextFunction) => {
	res.json({
		message: 'You made it to the secure route',
		user: req.user,
		token: req.query.secret_token
	});
}


/* ######### Middleware ######### */
export const middlewareAuthenticate = passport.authenticate('jwt', { session: false })
