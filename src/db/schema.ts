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

/*
model Article {
  id                Int      @id @default(autoincrement())
  title             String
  author            String
  date              DateTime
  origin            String
  link              String
  image             String
  objectFitPosition String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  isVisible         Boolean  @default(true)
  displayDate       String
  isContribution    Boolean
}

*/
