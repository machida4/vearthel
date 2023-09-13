import { NextPage } from 'next';
import { TypeBlogSkeleton } from '../../@types/contentful';
import { buildClient } from './lib/api';
import styles from './page.module.css';

const client = buildClient();

const Home: NextPage = async () => {
  const { items } = await client.getEntries<TypeBlogSkeleton>({
    content_type: 'blog',
  });
  return (
    <main className={styles.main}>
      <div>
        <>{items[0].fields.title}</>
      </div>
    </main>
  );
};

export default Home;
