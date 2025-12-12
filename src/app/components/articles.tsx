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

const Articles = () => {
	const articles: Article[] = [
		{
			title:
				'Hundreds Rally for Boy, 6, Who Was Separated From His Father by ICE',
			subtitle:
				'When she studied acting in London in the 1950s, she was told she was unlikely to find work. She ended up starting one of the country’s foremost Black theaters.',
			author: 'Stella Raine Chu',
			date: 'Dec. 7, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/12/07/nyregion/queens-migrant-boy-detained-rally.html',
			image:
				'https://static01.nyt.com/images/2025/12/07/multimedia/07met-child-rally-gkbp/07met-child-rally-gkbp-superJumbo.jpg?quality=75&auto=webp',
		},
		{
			title: 'Yvonne Brewster, Godmother of Black British Theater, Dies at 87',
			subtitle:
				'When she studied acting in London in the 1950s, she was told she was unlikely to find work. She ended up starting one of the country’s foremost Black theaters.',
			author: 'Stella Raine Chu',
			date: 'Nov. 14, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/11/14/theater/yvonne-brewster-dead.html',
			image:
				'https://static01.nyt.com/images/2025/11/17/multimedia/13brewster-fkmp/13brewster-fkmp-superJumbo.jpg?quality=75&auto=webp',
			objectFitPosition: 'top',
		},
		{
			title:
				'“No Beard or Flannel Required”: How the Astoria Woodworkers Collective Builds Community Through Craft',
			author: 'Stella Raine Chu',
			date: 'Jun. 20, 2025',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/06/20/no-beard-or-flannel-required-how-the-astoria-woodworkers-collective-builds-community-through-craft/',
			image:
				'https://queensledger.com/wp-content/uploads/2025/06/Craft-1--2048x1365.jpg',
		},
		{
			title: 'Can Students Go Without Their Smartphones? New York Thinks So.',
			author: 'Stella Raine Chu',
			date: 'Sep. 4, 2025',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/09/04/can-students-go-without-their-smartphones-new-york-thinks-so/',
			image:
				'https://queensledger.com/wp-content/uploads/2025/09/unnamed-3.jpg',
		},
		{
			title: 'How a Community Garden in Woodside Keeps the Neighborhood Alive',
			author: 'Stella Raine Chu',
			date: 'Feb. 14, 2024',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2024/02/14/how-a-community-garden-in-woodside-keeps-the-neighborhood-alive/',
			image: 'https://queensledger.com/wp-content/uploads/2024/02/image2.png',
		},
		{
			title: 'New York City Has a Bathroom Problem',
			author: 'Stella Raine Chu',
			date: 'May. 29, 2024',
			origin: 'The Arrow',
			link: 'https://www.thearrowmagazine.com/post/new-york-city-has-a-bathroom-problem',
			image:
				'https://static.wixstatic.com/media/7d07ff_13978f9a90744e01a5c363c9ac5f42c2~mv2.png/v1/fill/w_1456,h_970,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7d07ff_13978f9a90744e01a5c363c9ac5f42c2~mv2.png',
		},
	];

	return (
		<section id={styles.articles}>
			<h4>{'ARTICLES'}</h4>
			<HorizontalRule width='30%' />
			<ul>
				{articles.map(
					({ title, date, origin, link, image, objectFitPosition }, i) => {
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
										<p>{origin}</p>
									</Link>
									<p>{date}</p>
								</li>
								{i < articles.length - 1 ? (
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

export default Articles;
