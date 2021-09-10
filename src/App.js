import { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';


const Box = ({position, color}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1,1,1]} />
      <meshStandardMaterial attach='material' color={color}/>
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[0, 10, 0]}
          intensity={1}
          shadowMapWidth={1024}
          shadowMapHeight={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Box position={[0, 1, 0]} color='pink' />
        <Box position={[-2, 1, -5]} color='lightblue'/>
        <Box position={[5, 1, -2]} color='red'/>
      </Canvas>
    </>
  );
}

export default App;
