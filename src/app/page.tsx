import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.masthead}>
				<h1>Stella Raine Chu</h1>
				<hr />
				<div className={styles.subheader}>
					{/* <p>VOL. CLXII .. No. 56,163</p> */}
					<h4 id='date'>NEW YORK, SATURDAY, NOVEMBER 22, 2025</h4>
					{/* <p>$2.50</p> */}
				</div>
				<hr />
			</header>
			<main className={styles.main}></main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
