/** @format */

import dotenv from 'dotenv';
dotenv.config();

export const {
	PORT = 3000,
	KEY = '0',
	NODE_ENV,
	BASE_URL,
	HOME_URL,
	DB_URI = 'mongodb://localhost:27017/links',
	EMAIL_HOSTNAME,
	EMAIL_FROM,
	EMAIL_USERNAME,
	EMAIL_PASSWORD,
	JWT_SECRET_KEY,
} = process.env;
