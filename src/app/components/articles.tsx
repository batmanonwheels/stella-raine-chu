import styles from './modules/articles.module.css';
import HorizontalRule from './horizontal-rule';

interface Article {
	title: string;
	subtitle?: string;
	author: string;
	date: string;
	origin: string;
	link: string;
}

type ArticlesProps = {
	type: 'articles' | 'contributions';
};

const Articles = ({ type }: ArticlesProps) => {
	const articles: Article[] = [
		{
			title: 'Yvonne Brewster, Godmother of Black British Theater, Dies at 87',
			subtitle:
				'When she studied acting in London in the 1950s, she was told she was unlikely to find work. She ended up starting one of the country’s foremost Black theaters.',
			author: 'Stella Raine Chu',
			date: 'Nov. 14, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/11/14/theater/yvonne-brewster-dead.html',
		},
		{
			title:
				'“No Beard or Flannel Required”: How the Astoria Woodworkers Collective Builds Community Through Craft',
			author: 'Stella Raine Chu',
			date: 'Jun. 20, 2025',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/06/20/no-beard-or-flannel-required-how-the-astoria-woodworkers-collective-builds-community-through-craft/',
		},
		{
			title: 'Can Students Go Without Their Smartphones? New York Thinks So.',
			author: 'Stella Raine Chu',
			date: 'Sep. 4, 2025',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/09/04/can-students-go-without-their-smartphones-new-york-thinks-so/',
		},
		{
			title: 'How a Community Garden in Woodside Keeps the Neighborhood Alive',
			author: 'Stella Raine Chu',
			date: 'Feb. 14, 2024',
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2024/02/14/how-a-community-garden-in-woodside-keeps-the-neighborhood-alive/',
		},
		{
			title: 'New York City Has a Bathroom Problem',
			author: 'Stella Raine Chu',
			date: 'May. 29, 2024',
			origin: 'The Arrow',
			link: 'https://www.thearrowmagazine.com/post/new-york-city-has-a-bathroom-problem',
		},
	];

	const bylines: Article[] = [
		{
			title:
				'Marthe Gautier, 96, Dies; Had Key Role in Down Syndrome Breakthrough',
			subtitle:
				'She had to fight for recognition after a male colleague took credit for her work in identifying an extra chromosome as the cause of that genetic condition.',
			author: 'Denise Grady',
			date: 'Oct. 30, 2025',
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/10/30/health/marthe-gautier-dead.html',
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
		},
	];

	return (
		<section id={styles.articles}>
			<h4>{type === 'articles' ? 'ARTICLES' : 'CONTRIBUTIONS'}</h4>
			<HorizontalRule width='30%' />

			{type === 'articles' ? (
				<ul>
					{articles.map(({ title, author, date, origin, link }) => {
						return (
							<li className={styles.article} key={title}>
								<a href={link}>
									<h5>
										{title} - <span>{origin}</span>
									</h5>
								</a>
								<p>{date}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<ul>
					{bylines.map(({ title, author, date, origin, link }) => {
						return (
							<li className={styles.article} key={title}>
								<a href={link}>
									<h5>
										{title} -{' '}
										<span>
											{origin} - ({author})
										</span>
									</h5>
								</a>
								{/* <p>by {author}</p> */}
								<p>{date}</p>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
};

export default Articles;
