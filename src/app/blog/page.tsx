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
    <div className="content">
      {items.map((item) => (
        <div key={item.fields.slug}>
          <Link href={`/blog/${item.fields.slug}`}>{item.fields.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
