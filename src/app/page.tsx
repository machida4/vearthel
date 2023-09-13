import { NextPage } from 'next';
import Link from 'next/link';
import { buildClient } from './lib/api';
import { TypeBlogSkeleton } from './lib/contentful';
import styles from './page.module.scss';

const client = buildClient();

const Home: NextPage = async () => {
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });

  return (
    <div>
      <main className={styles.main}>
        <div className="content">
          {items.map((item) => (
            <div key={item.fields.slug}>
              <Link href={`/blog/${item.fields.slug}`}>
                {item.fields.title}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
