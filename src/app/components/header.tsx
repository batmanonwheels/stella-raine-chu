import styles from './modules/header.module.css';

export default function Header() {
	const parseDate = (): string => {
		const currentDate = new Date();
		const day = currentDate.getDay();
		const month = currentDate.getMonth();
		const date = currentDate.getDate();
		const year = currentDate.getFullYear();

		return `${days[day]}, ${months[month]} ${date}, ${year}`;
	};

	const days: string[] = [
		'SUNDAY',
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
	];

	const months: string[] = [
		'JANUARY',
		'FEBRUARY',
		'MARCH',
		'APRIL',
		'MAY',
		'JUNE',
		'JULY',
		'AUGUST',
		'SEPTEMBER',
		'OCTOBER',
		'NOVEMEBER',
		'DECEMBER',
	];

	let date = parseDate();

	return (
		<header className={styles.masthead}>
			<h1>Stella Raine Chu</h1>
			<hr />
			<div className={styles.subheader}>
				{/* <p>VOL. CLXII .. No. 56,163</p> */}
				<h4 id='date'>{`NEW YORK, ${date}`}</h4>
				{/* <p>$2.50</p> */}
			</div>
			<hr />
		</header>
	);
}
