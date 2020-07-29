import * as passportJwt from 'passport-jwt';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt  = passportJwt.ExtractJwt;

const OPTIONS_JWT = {
	jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token'),
	secretOrKey: process.env.SECRET_TOKEN || 'htam00',
	issuer: process.env.ISSUER_EMAIL || 'matheuslunadev@gmail.com',
	audience: process.env.AUDIENCE_SITE || ''
};

const CALLBACK_JWT = async (token, done) => {
	try {
		return done(null, token.user);
	} catch (error) {
		done(error);
	}
}


export const jwtStrategy = new JwtStrategy(OPTIONS_JWT, CALLBACK_JWT);
