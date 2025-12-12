import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';
import HorizontalRule from './components/horizontal-rule';
import Articles from './components/articles';
import Contributions from './components/contributions';
import About from './components/about';

export default function Home() {
	const photos: string[] = [
		'zzelgf0qovwuyyhtjebu.webp',
		'l5ebqdpms3x30wvixmov.webp',
		'd0c8qvzhqeijgcwrlkvq.webp',
	];

	let randPhotoIndex = Math.floor(Math.random() * (photos.length - 1 + 1));

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.cover}>
					<img src={photos[randPhotoIndex]} alt='Photo of Stella Raine Chu' />
					<HorizontalRule width='100%' />
					<About />
				</div>

				<Articles />

				<Contributions />
			</main>
			<Footer />
		</>
	);
}
