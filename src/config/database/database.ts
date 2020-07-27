import { connect }from 'mongoose';

const DB_URI = process.env.MONGO_URI || 'mongodb://mathlun:zurik21__@ds161312.mlab.com:61312/connect-jobs';

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

export const connected = connect(DB_URI, OPTIONS);

