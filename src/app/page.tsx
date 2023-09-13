import { NextPage } from 'next';
import { buildClient } from './lib/api';
import { TypeBlogSkeleton } from './lib/contentful';

const client = buildClient();

const Home: NextPage = async () => {
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });

  return <div className="content">Hello, World!</div>;
};

export default Home;
