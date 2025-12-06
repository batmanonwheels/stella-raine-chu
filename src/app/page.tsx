import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';
import HorizontalRule from './components/horizontal-rule';
import Articles from './components/articles';

export default async function Home() {
	const photos: string[] = [
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958394/stella-raine-chu/stella-raine-chu-1_fvrnb5.jpg',
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958394/stella-raine-chu/stella-raine-chu-2_bt7tja.jpg',
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958395/stella-raine-chu/stella-raine-chu-3_mlksqt.jpg',
		'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1764958396/stella-raine-chu/stella-raine-chu-4_bqgioi.jpg',
	];

	let randPhotoIndex = Math.floor((photos.length * 3 * Math.random()) / 3);

	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<div className={styles.cover}>
					<img src={photos[randPhotoIndex]} alt='Photo of Stella Raine Chu' />
					<HorizontalRule />

					<section className={styles.section} id={styles.about}>
						<h4>ABOUT</h4>
						<HorizontalRule width='30%' />
						<p></p>
					</section>
				</div>

				<div>
					<Articles type={'articles'} />
				</div>

				<div>
					<Articles type={'contributions'} />

					<section className={styles.section} id={styles.contact}>
						<h4>CONTACT ME</h4>
						<HorizontalRule width='30%' />

						<div className={styles.socials}>
							<a href='http://www.linkedin.com/in/stellarainechu'>
								<p>LinkedIn</p>
							</a>
							<a href='https://www.instagram.com/stellarainechu/'>
								<p>Instagram</p>
							</a>
							<a href='mailto:mail@stellarainechu.com'>
								<p>Send me an email</p>
							</a>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
