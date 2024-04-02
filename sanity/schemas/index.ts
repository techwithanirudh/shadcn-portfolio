import { type SchemaTypeDefinition } from 'sanity'

import settings from './singletons/settings'
import page from './documents/page'

export const schemaTypes = [settings, page];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
