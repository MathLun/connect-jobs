import * as passportLocal from 'passport-local';
import UserModel from '../../../models/users';
import { validatePassword } from '../validate';

const LocalStrategy = passportLocal.Strategy;

const signupCallback = async (email: string, password: string, done) => {
	try {
		const user = await UserModel.create({
			email,
			password
		});
		return done(null, user);
	} catch(error) {
		return done(error);
	}
}

const signinCallback = async (email: string, password: string, done) => {
	try {
		const user = await UserModel.findOne({ email });
		if(!user) {
			return done(null, false, {
				message: ''
			});
		}

		const validate = await validatePassword(password, user);
		if( !validate ) {
			return done(null, false, {
				message: ''
			});
		}

		return done(null, user, { 
			message: 'Logged Successful...'
		});
	} catch(error) {
		return done(error);
	}
}

const localOptions = {
	usernameField: 'email',
	passwordField: 'password'
}

const signupStrategy = new LocalStrategy(
	localOptions, 
	signupCallback
);

const signinStrategy = new LocalStrategy(
	localOptions, 
	signinCallback
);

export const localStrategy = {
	signup: signupStrategy,
	signin: signinStrategy
}
