import { connect }from 'mongoose';

const DB_URI = process.env.MONGO_URI || 'MONGODB_URL';

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

export const connected = connect(DB_URI, OPTIONS);

