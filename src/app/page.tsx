import { NextPage } from 'next';
import { buildClient } from './lib/api';

const client = buildClient();

const Home: NextPage = async () => {
  return <div className="content">Hello, World!</div>;
};

export default Home;
