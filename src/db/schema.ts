import { pgTable, integer, text, date, boolean } from 'drizzle-orm/pg-core';

export const articlesTable = pgTable('articles', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: text().notNull(),
	author: text().notNull(),
	date: date({ mode: 'date' }).notNull(),
	origin: text().notNull(),
	link: text().notNull(),
	image: text().notNull(),
	objectFitPosition: text().default('center').notNull(),
	isVisible: boolean().default(true),
	displayDate: text().notNull(),
	isContribution: boolean(),
});
