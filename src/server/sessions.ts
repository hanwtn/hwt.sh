import {serialize} from 'cookie';
import dayjs from 'dayjs';


export function getCookieHeader(token: string) {
	return serialize('token', token, {
		httpOnly: true,
		path: '/',
		secure: process.env.NODE_ENV !== 'development',
		expires: dayjs().add(1, 'day').toDate(),
		sameSite: 'strict',
	});
}
