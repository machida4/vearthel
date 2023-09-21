'use client';

import { NextPage } from 'next';
import Scene from './_components/Scene';

const Home: NextPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Scene />
      </div>
      <div className="text-center text-6xl font-bold mb-3">
        <p>Hello, Earth!</p>
      </div>
      <div className="text-center text-2xl">
        <p>machida.earth</p>
      </div>
    </div>
  );
};

export default Home;
