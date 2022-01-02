/** @format */

import * as express from 'express';
import mongoose from 'mongoose';
import { PORT, KEY, NODE_ENV } from './vars';
import helmet from 'helmet';

async function startServer() {
	const app = express.default();

	await mongoose.connect('mongodb://localhost:27017/opd', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
    });

    app.use(helmet());

	app.get('/:id', (req, res) => {
		res.status(200).send(
			`<h1>Welcome to Ligitaj!</h1>`
		);
	});

	console.log('Connected to MongoDB');

	app.listen({ port: PORT }, () => {
		console.log(`🚀 Server ready at http://localhost:${PORT}`);
		console.info(`NODE_ENV: ${NODE_ENV}, KEY: ${KEY}`);
	});
}

if (KEY === '0' && NODE_ENV !== 'development') {
	console.error(
		'Running in production mode with KEY set to 0. Please set KEY to a valid value then start again.'
	);
} else {
	startServer();
}
