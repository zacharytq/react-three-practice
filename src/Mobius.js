import { useLoader } from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const Mobius = () => {
  const gltf = useLoader(GLTFLoader, './mobius.glb')

  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  )
}

export default Mobius;

