import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}></main>
			<Footer />
		</div>
	);
}
