/** @format */

import nodeMailer from 'nodemailer';
import { EMAIL_HOSTNAME, EMAIL_PASSWORD, EMAIL_USERNAME } from '../src/vars';

export const transport = nodeMailer.createTransport({
	host: EMAIL_HOSTNAME,
	port: 587,
	auth: {
		user: EMAIL_USERNAME,
		pass: EMAIL_PASSWORD,
	},
});

export const emailTemplate = ({ username, link }) => `
  <h2>Hey ${username}</h2>
  <p>Here's the login link you just requested:</p>
  <p>${link}</p>
`;