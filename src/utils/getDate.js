export function getFullDate() {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const today = new Date();
	const day = today.getDate();
	const month = months[today.getMonth()];
	const year = today.getFullYear();
	const hours = today.getHours();
	const minutes = today.getMinutes();

	return `${day} ${month} ${year}, ${hours}:${minutes}`;
}
