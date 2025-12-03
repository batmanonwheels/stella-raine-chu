import styles from './page.module.css';
import Footer from './components/footer';
import Header from './components/header';

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<div className={styles.cover}>
					<img
						src='https://static.wixstatic.com/media/7aa4d3_0a3bfc126abc41d1b30be7fee457bac0~mv2.jpg/v1/crop/x_107,y_0,w_2809,h_4032/fill/w_602,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c.jpg'
						alt='Photo of Stella Raine Chu kissing a black cat'
					/>
				</div>
				<div></div>
				<div></div>
			</main>
			<Footer />
		</div>
	);
}
