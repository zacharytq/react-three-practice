import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const Mobius = () => {
  const gltf = useLoader(GLTFLoader, './mobius.glb')
  const mobius = useRef(null)

  useFrame(() => (mobius.current.rotation.x = mobius.current.rotation.y += 0.01))

  return (
    <>
      <primitive castShadow object={gltf.scene} scale={1} ref={mobius}/>
    </>
  )
}

export default Mobius;

