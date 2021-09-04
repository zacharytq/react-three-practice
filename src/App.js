import './App.scss';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';


function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
