import * as bcrypt from 'bcrypt';

export const validatePassword = async (password: string, user) => {

	const compare = await bcrypt.compare(password, user.password);
	return compare;
}
