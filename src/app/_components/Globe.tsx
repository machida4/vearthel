'use client';

import { useCursor } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';

type Props = {
  route: string;
};

const Globe: React.FC<Props> = ({ route }) => {
  const meshRef = useRef<Mesh>(null!);
  // const router = useRouter();

  const [hovered, hover] = useState(false);
  const globeMap = useLoader(TextureLoader, 'icon.png');

  useCursor(hovered);
  useFrame((_, delta) => (meshRef.current.rotation.y += delta / 2));

  return (
    <mesh
      ref={meshRef}
      // onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={globeMap} />
    </mesh>
  );
};

export default Globe;
