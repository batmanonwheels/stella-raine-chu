import styles from './modules/articles.module.css';
import HorizontalRule from './horizontal-rule';
import { Fragment } from 'react';
import Link from 'next/link';
import { articlesTable } from '@/db/schema';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { eq, desc } from 'drizzle-orm';

const Articles = async () => {
	const db = drizzle();

	const articles = await db
		.select()
		.from(articlesTable)
		.where(eq(articlesTable.isContribution, false))
		.orderBy(desc(articlesTable.date));

	return (
		<section id={styles.articles}>
			<h4>{'ARTICLES'}</h4>
			<HorizontalRule width='30%' />
			<ul>
				{articles.map(
					(
						{ title, displayDate, origin, link, image, objectFitPosition },
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
										<p>{origin}</p>
									</Link>
									<p>{displayDate}</p>
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
