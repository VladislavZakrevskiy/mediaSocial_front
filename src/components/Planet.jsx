import React, { useRef } from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, Stars} from '@react-three/drei'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../assets/earth.jpg'



const Sphere = () => {
  const textureMap = useLoader(TextureLoader, texture);
  const meshRef = useRef(null)
  useFrame(() => (meshRef.current.rotation.y += 0.004));
  return (
    <mesh ref={meshRef} position={[2.5,0,1]}>
      <sphereBufferGeometry attach='geometry' />
      <meshStandardMaterial  map={textureMap}/>
    </mesh>

      
    )
}



const Planet = () => {
  


  return (
    <Canvas 
      style={{backgroundColor: 'black', width: '100%',height: '100vh'}}
      camera={{position: [5,0,3], fov: 60}}
      >
      <Stars/>
      <OrbitControls />
      <ambientLight intensity={0.5}/>
      {/* <spotLight position={[10,10,10]} angle={0.3}/> */}
      <directionalLight position={[1, 1, 1]} intensity={.5} />
      <Sphere />
    </Canvas>
  )
}

export default Planet