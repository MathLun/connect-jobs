import * as bcrypt from 'bcrypt';
import { Schema, Document, model } from 'mongoose';

interface IUsers extends Document {
	email: string,
	password: string,
}

const UsersSchema: Schema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

UsersSchema.pre('save', async (next) => {
	const user = this;

	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;

	next();
});

export default model<IUsers>("Users", UsersSchema);
