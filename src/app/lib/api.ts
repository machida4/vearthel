import * as contentful from 'contentful';
import { TypeBlogSkeleton } from './contentful';

export const buildClient = () => {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })
}

export const getAllBlogs = async () => {
  const client = buildClient();
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });

  return items;
}

export const getBlog = async (slug: string) => {
  const client = buildClient();
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
    "fields.slug": slug,
  });

  return items[0];
}
