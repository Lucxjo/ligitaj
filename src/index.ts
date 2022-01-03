/** @format */

import * as express from 'express';
import mongoose from 'mongoose';
import { PORT, KEY, NODE_ENV, BASE_URL, HOME_URL, DB_URI } from './vars';
import helmet from 'helmet';
import * as link from '../models/link';

async function startServer() {
	const app = express.default();

	await mongoose.connect(DB_URI);

	app.use(helmet());
	app.use(express.urlencoded({ extended: false }));

	app.get('/', (req, res) => {
		res.status(302).redirect(`${HOME_URL}`);
	});

	app.get('/:short', async (req, res) => {
		const url = await link.default.findOne({ short: req.params.short });
		if (!url) {
			res.status(404).redirect(`${HOME_URL}`);
			return;
		}
		if (NODE_ENV === 'production') {
			url.clicks++;
			url.save();
		}
		res.status(302).redirect(url.full);
	});

	app.post('/create-short', async (req, res) => {
		if (req.headers['x-api-key'] !== KEY) {
			res.status(401).send('Invalid API key');
			return;
		} else {
			if (req.body.short) {
				const url = await link.default.create({
					full: req.body.full,
					short: req.body.short,
				});
				res.status(200).send('Created: ' + url);
			} else {
				const url = await link.default.create({
					full: req.body.full,
				});
				res.status(200).send('Created: ' + url);
			}
		}
	});

	app.post('/:short', async (req, res) => {
		if (req.headers['x-api-key'] !== KEY) {
			res.status(401).send('Invalid API key');
			return;
		} else {
			const url = await link.default.findOne({
				short: req.params.short,
			});
			res.status(200).send({
				full: url.full,
				short: `${BASE_URL}/${url.short}`,
				clicks: url.clicks,
			});
		}
	});

	app.post('/remove/:short', async (req, res) => {
		if (req.headers['x-api-key'] !== KEY) {
			res.status(401).send('Invalid API key');
			return;
		} else {
			await link.default.deleteOne({
				short: req.params.short,
			});
			res.status(200).send(`Deleted: ${req.params.short}`);
		}
	});

	app.post('/auth', (req, res) => {
		const { email } = req.body;

		if (!email) {
			res.status(403).send({
				message: 'There is no email address that matches this.',
			});
		}

		if (email) {
			res.status(200).send(email);
		}
	});

	app.post('/', async (req, res) => {
		if (req.headers['x-api-key'] !== KEY) {
			res.status(401).send('Invalid API key');
			return;
		} else {
			const short = await link.default.find();
			res.status(200).send(`${short}`);
		}
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
