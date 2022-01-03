/** @format */

import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../src/vars';

const makeToken = email => {
	const expirationDate = new Date();
	expirationDate.setHours(new Date().getHours() + 1);
	return jwt.sign({ email, expirationDate }, JWT_SECRET_KEY);
};
