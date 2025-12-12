import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';
import HorizontalRule from './components/horizontal-rule';
import Articles from './components/articles';
import Contributions from './components/contributions';
import About from './components/about';
import Image from 'next/image';

export default function Home() {
	const photos: string[] = [
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958394/stella-raine-chu/stella-raine-chu-1_fvrnb5.jpg',
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958394/stella-raine-chu/stella-raine-chu-2_bt7tja.jpg',
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958395/stella-raine-chu/stella-raine-chu-3_mlksqt.jpg',
		// 'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958396/stella-raine-chu/stella-raine-chu-4_bqgioi.jpg',
	];

	let randPhotoIndex = Math.floor((photos.length * 3 * Math.random()) / 3);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.cover}>
					<Image
						src={photos[randPhotoIndex]}
						alt='Photo of Stella Raine Chu'
						width={200}
						height={200}
						unoptimized
					/>
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
