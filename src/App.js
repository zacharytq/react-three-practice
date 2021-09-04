import { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';


const Box = ({position}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1,1,1]} />
      <meshStandardMaterial attach='material' color='blue'/>
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <Box position={[0, 1, 0]} />
        <Box position={[-2, 1, -5]} />
        <Box position={[5, 1, -2]} />
      </Canvas>
    </>
  );
}

export default App;
