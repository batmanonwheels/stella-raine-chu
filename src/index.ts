import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { articlesTable } from './db/schema';

const main = async () => {
	const db = drizzle();

	const articleSeed: (typeof articlesTable.$inferInsert)[] = [
		{
			title:
				'Hundreds Rally for Boy, 6, Who Was Separated From His Father by ICE',
			author: 'Stella Raine Chu',
			displayDate: 'Dec. 7, 2025',
			date: new Date('2025-12-07'),
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/12/07/nyregion/queens-migrant-boy-detained-rally.html',
			image:
				'https://static01.nyt.com/images/2025/12/07/multimedia/07met-child-rally-gkbp/07met-child-rally-gkbp-superJumbo.jpg?quality=75&auto=webp',
			isContribution: false,
		},
		{
			title: 'Yvonne Brewster, Godmother of Black British Theater, Dies at 87',
			author: 'Stella Raine Chu',
			displayDate: 'Nov. 14, 2025',
			date: new Date('2025-11-14'),
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/11/14/theater/yvonne-brewster-dead.html',
			image:
				'https://static01.nyt.com/images/2025/11/17/multimedia/13brewster-fkmp/13brewster-fkmp-superJumbo.jpg?quality=75&auto=webp',
			objectFitPosition: '30% 30%',
			isContribution: false,
		},
		{
			title:
				'“No Beard or Flannel Required”: How the Astoria Woodworkers Collective Builds Community Through Craft',
			author: 'Stella Raine Chu',
			displayDate: 'Jun. 20, 2025',
			date: new Date('2025-06-20'),
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/06/20/no-beard-or-flannel-required-how-the-astoria-woodworkers-collective-builds-community-through-craft/',
			image:
				'https://queensledger.com/wp-content/uploads/2025/06/Craft-1--2048x1365.jpg',
			isContribution: false,
		},
		{
			title: 'Can Students Go Without Their Smartphones? New York Thinks So.',
			author: 'Stella Raine Chu',
			displayDate: 'Sep. 4, 2025',
			date: new Date('2025-09-04'),
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2025/09/04/can-students-go-without-their-smartphones-new-york-thinks-so/',
			image:
				'https://queensledger.com/wp-content/uploads/2025/09/unnamed-3.jpg',
			isContribution: false,
		},
		{
			title: 'How a Community Garden in Woodside Keeps the Neighborhood Alive',
			author: 'Stella Raine Chu',
			displayDate: 'Feb. 14, 2024',
			date: new Date('2024-02-14'),
			origin: 'Queens Ledger',
			link: 'https://queensledger.com/2024/02/14/how-a-community-garden-in-woodside-keeps-the-neighborhood-alive/',
			image: 'https://queensledger.com/wp-content/uploads/2024/02/image2.png',
			isContribution: false,
		},
		{
			title: 'New York City Has a Bathroom Problem',
			author: 'Stella Raine Chu',
			displayDate: 'May. 29, 2024',
			date: new Date('2024-05-29'),
			origin: 'The Arrow',
			link: 'https://www.thearrowmagazine.com/post/new-york-city-has-a-bathroom-problem',
			image:
				'https://static.wixstatic.com/media/7d07ff_13978f9a90744e01a5c363c9ac5f42c2~mv2.png/v1/fill/w_1456,h_970,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7d07ff_13978f9a90744e01a5c363c9ac5f42c2~mv2.png',
			isContribution: false,
		},
		{
			title:
				'Marthe Gautier, 96, Dies; Had Key Role in Down Syndrome Breakthrough',
			author: 'Denise Grady',
			displayDate: 'Oct. 30, 2025',
			date: new Date('2025-10-30'),
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/10/30/health/marthe-gautier-dead.html',
			image:
				'https://static01.nyt.com/images/2025/10/30/multimedia/30gautier-zlqk/30gautier-zlqk-superJumbo.jpg?quality=75&auto=webp',
			isContribution: true,
		},
		{
			title:
				'Steve Cropper, Guitarist, Songwriter and Shaper of Memphis Soul Music, Dies at 84',
			author: 'Bill Friskics-Warren',
			displayDate: 'Dec. 3, 2025',
			date: new Date('2025-12-03'),
			origin: 'The New York Times',
			link: 'https://www.nytimes.com/2025/12/03/arts/music/steve-cropper-dead.html',
			image:
				'https://static01.nyt.com/images/2025/12/03/obituaries/03cropper/03cropper-superJumbo.jpg?quality=75&auto=webp',
			objectFitPosition: 'top',
			isContribution: true,
		},
	];

	await db.insert(articlesTable).values(articleSeed);
	console.log('New articles created!');
	const articles = await db.select().from(articlesTable);
	console.log('Getting all articles from the database: ', articles);
};

main();
