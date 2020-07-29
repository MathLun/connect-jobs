import * as passport from 'passport';
import { localStrategy } from './strategies/local';
import { jwtStrategy } from './strategies/jwt';

import { useSerialize, 
	 useDeserialize } from './serialization';

export const configure = (): void => {
	passport.serializeUser(useSerialize);
	passport.deserializeUser(useDeserialize);

	passport.use('signup', localStrategy.signup);
	passport.use('signin', localStrategy.signin);
}
