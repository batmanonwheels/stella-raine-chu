import styles from './modules/articles.module.css';
import HorizontalRule from './horizontal-rule';
import { Fragment } from 'react';
import Link from 'next/link';

interface Article {
	title: string;
	subtitle?: string;
	author: string;
	date: string;
	origin: string;
	link: string;
	image?: string;
	objectFitPosition?: string;
}

const Contributions = () => {
	const contributions: Article[] = [
		{
			title:
				'Marthe Gautier, 96, Dies; Had Key Role in Down Syndrome Breakthrough',
			subtitle:
				'She had to fight for recognition after a male colleague took credit for her work in identifying an extra chromosome as the cause of that genetic condition.',
			author: 'Denise Grady',
			date: 'Oct. 30, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/10/30/health/marthe-gautier-dead.html',
			image:
				'https://static01.nyt.com/images/2025/10/30/multimedia/30gautier-zlqk/30gautier-zlqk-superJumbo.jpg?quality=75&auto=webp',
		},
		{
			title:
				'Steve Cropper, Guitarist, Songwriter and Shaper of Memphis Soul Music, Dies at 84',
			subtitle:
				'As a member of Booker T. & the MG’s and as a producer, he played a pivotal role in the rise of Stax Records, a storied force in R&B in the 1960s and ’70s.',
			author: 'Bill Friskics-Warren',
			date: 'Dec. 3, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/12/03/arts/music/steve-cropper-dead.html',
			image:
				'https://static01.nyt.com/images/2025/12/03/obituaries/03cropper/03cropper-superJumbo.jpg?quality=75&auto=webp',
			objectFitPosition: 'top',
		},
	];

	return (
		<section id={styles.articles}>
			<h4>{'CONTRIBUTIONS'}</h4>
			<HorizontalRule width='30%' />
			<ul>
				{contributions.map(
					(
						{ title, author, date, origin, link, image, objectFitPosition },
						i
					) => {
						return (
							<Fragment key={title}>
								<li className={styles.article}>
									<Link href={link} target='_blank'>
										{image ? (
											<img
												src={image}
												alt={title + ' via ' + origin}
												style={{ objectPosition: objectFitPosition }}
											/>
										) : (
											<></>
										)}
										<HorizontalRule width='100%' />
										<h5>{title}</h5>
										<p>by {author}</p>
										<p>{origin}</p>
									</Link>
									<p>{date}</p>
								</li>
								{i < contributions.length - 1 ? (
									<HorizontalRule width='15%' />
								) : (
									<></>
								)}
							</Fragment>
						);
					}
				)}
			</ul>
		</section>
	);
};

export default Contributions;
