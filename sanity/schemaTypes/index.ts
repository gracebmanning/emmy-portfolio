import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {projectType} from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectType],
}
