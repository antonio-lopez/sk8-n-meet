import {defineConfig} from 'sanity'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-backend',

  projectId: 'jkn6q794',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
