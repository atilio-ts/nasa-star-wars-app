import { useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import { LinearEncoding } from '@react-three/drei/helpers/deprecated';

import marsTextureMapImg from '../../assets/rockyTextures/mars_diff_1k.jpg'
import marsTextureDispMapImg from '../../assets/rockyTextures/mars_disp_1k.jpg'
import marsTextureARMMapImg from '../../assets/rockyTextures/mars_arm_1k.jpg'
import marsTextureNormalMapImg from '../../assets/rockyTextures/mars_nor_gl_1k.jpg'

function Sphere() {
  const marsTexture = useTexture({
    map:marsTextureMapImg,
    displacementMap: marsTextureDispMapImg,
    aoMap: marsTextureARMMapImg,
    roughnessMap: marsTextureARMMapImg,
    metalnessMap: marsTextureARMMapImg,
    normalMap: marsTextureNormalMapImg
  })

  const sphereRef = useRef<HTMLDivElement | null>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0009;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={sphereRef}>
      <sphereGeometry attach="geometry" args={[2.4, 64, 64]} />
      <meshStandardMaterial {...marsTexture} normalMap-encoding={LinearEncoding} color='#9C2E35'/>
    </mesh>
  );
}

export default function Mars(){
  

  return (
    <>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={ 5 } />
      <Sphere />
    </>
  )
}