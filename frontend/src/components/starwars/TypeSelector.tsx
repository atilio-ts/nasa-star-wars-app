import { OrbitControls, Stars, useGLTF } from '@react-three/drei';

interface IProps{
  name: string;
}


function Starship() {
  const { scene } = useGLTF("./models/millennium_falcon.glb");

  return (
    <primitive object={scene} scale={0.2}/>
  );
}

function Character({ name }: IProps) {
  const r2d2Model = useGLTF("./models/r2d2.glb");
  const groguModel = useGLTF("./models/grogu.glb");

  return (
    <primitive object={(name == "r2-d2") ? r2d2Model.scene:groguModel.scene} scale={5}/>
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

export function TypeSelectorCharacter(props: IProps){
  return (
    <>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={ 5 } />
      <Character {...props}/>
    </>
  )
}