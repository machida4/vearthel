'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NextPage } from 'next';
import React, { Suspense } from 'react';
import Globe from './_components/Globe';

const Scene: React.FC = () => {
  return (
    <div className="mx-auto">
      <Canvas className="relative h-full">
        <Suspense fallback={null}>
          <ambientLight intensity={2.0} />
          {/* <directionalLight color="red" position={[0, 0, 5]} intensity={0.5} /> */}
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} /> */}
          <Globe route={'/about'} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Scene />
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
