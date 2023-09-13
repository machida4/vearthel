import { NextPage } from 'next';
import Link from 'next/link';
import { buildClient } from './lib/api';
import { TypeBlogSkeleton } from './lib/contentful';
import styles from './page.module.css';

const client = buildClient();

const Home: NextPage = async () => {
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });

  return (
    <div>
      <main className={styles.main}>
        <div className="content">
          <Link href={`/blogs/${items[0].fields.slug}`}>
            {items[0].fields.title}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
