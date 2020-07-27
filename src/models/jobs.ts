import * as mongoose from 'mongoose';
import { Schema, Document, model } from 'mongoose';

interface IJobs extends Document {
	name: string,
	description: string,
}

const JobsSchema: Schema = new Schema({
	name: { type: String },
	description: { type: String }
});

export default model<IJobs>("Jobs", JobsSchema);
