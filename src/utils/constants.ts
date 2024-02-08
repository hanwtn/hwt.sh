export const TimeFormatter = new Intl.DateTimeFormat(undefined, {
	timeZone: 'America/Vancouver',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false,
});

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
	style: 'long',
});

export const discordId = '850409862792871966';

export const dob = new Date('2002-03-01');
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
export const hasHadBirthdayThisYear =
	new Date().getMonth() >= dob.getMonth() && new Date().getDate() >= dob.getDate();

export const nextBirthdayYear = new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
	Math.floor(
		(new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() - Date.now()) /
			1000 /
			60 /
			60 /
			24,
	),
	'day',
)[1]!.value.toString();
