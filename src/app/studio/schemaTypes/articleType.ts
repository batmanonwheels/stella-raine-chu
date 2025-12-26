import { defineField, defineType } from 'sanity';

export const articleType = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'string',
			initialValue: 'Stella Raine Chu',
		}),
		defineField({
			name: 'origin',
			title: 'Origin',
			type: 'string',
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'string',
		}),
		defineField({
			name: 'objectFitPosition',
			title: 'Object Fit Position',
			type: 'string',
			initialValue: 'center',
		}),
		defineField({
			name: 'isContribution',
			title: 'Is Contribution',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'isVisible',
			title: 'Is Visible',
			type: 'boolean',
			initialValue: true,
		}),
	],
});
