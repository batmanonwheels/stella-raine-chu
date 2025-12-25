import { articleType } from '@/app/studio/schemaTypes/articleType';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [articleType],
};
