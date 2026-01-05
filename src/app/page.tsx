import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';
import HorizontalRule from './components/horizontal-rule';
import Articles from './components/articles';
import Contributions from './components/contributions';
import About from './components/about';
import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';

const PHOTOS_QUERY = `*[
  _type == "photo"
]`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
	const photos = await client.fetch<SanityDocument[]>(
		PHOTOS_QUERY,
		{},
		options
	);

	let randPhotoIndex = Math.floor(Math.random() * (photos.length - 1 + 1));

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.cover}>
					<img
						src={photos[randPhotoIndex]!.link}
						alt='Photo of Stella Raine Chu'
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
