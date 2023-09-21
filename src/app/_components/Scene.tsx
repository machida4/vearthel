import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Globe from './Globe';

const Scene: React.FC = () => {
  return (
    <div className="mx-auto h-64">
      <Canvas className="relative h-full">
        <Suspense fallback={null}>
          <ambientLight intensity={3.0} />
          <Globe route={'/about'} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
