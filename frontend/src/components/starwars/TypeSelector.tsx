import { OrbitControls, Stars, useGLTF } from '@react-three/drei';

function Starship() {
  const { scene } = useGLTF("./models/millennium_falcon.glb");

  return (
    <primitive object={scene} scale={0.2}/>
  );
}

function Character() {
  const scene = useGLTF("./models/r2d2.glb");

  return (
    <primitive object={scene} scale={0.2}/>
  );
}

export function TypeSelectorStarship(){
  return (
    <>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={ 5 } />
      <Starship />
    </>
  )
}

export function TypeSelectorCharacter(){
  return (
    <>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={ 5 } />
      <Character />
    </>
  )
}