import { NextPage } from 'next';
import Link from 'next/link';
import { buildClient } from '../lib/api';
import { TypeBlogSkeleton } from '../lib/contentful';

const client = buildClient();

const BlogPage: NextPage = async () => {
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {items.map((item) => (
          <li key={item.fields.slug}>
            <Link href={`/blog/${item.fields.slug}`}>
              <h2>{item.fields.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
