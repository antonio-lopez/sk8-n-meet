import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'jkn6q794',
  dataset: 'production',
  apiVersion: '2023-02-23',
  useCdn: true,
});
