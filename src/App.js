import { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';


const Box = ({position, color}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1,1,1]} />
      <meshStandardMaterial attach='material' color={color}/>
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas shadows colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <directionalLight 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          position={[0, 10, 0]}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} args={[1000, 1000]} receiveShadow >
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
        </group>

        <Box position={[0, 1, 0]} color='pink' />
        <Box position={[-2, 1, -5]} color='lightblue'/>
        <Box position={[5, 1, -2]} color='red'/>
      </Canvas>
    </>
  );
}

export default App;
