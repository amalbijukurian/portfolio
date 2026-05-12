import {Canvas,useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { useRef } from 'react';


function Cube(){
     const cubeRef = useRef()

  useFrame((state,delta) => {
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta
  })
    return(

        
    <mesh ref={cubeRef}>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color={'orange'}/>
        
    </mesh>
    )
}

export default function Scene() {
    return (
        <Canvas
        camera={{position: [0, 0, 4]}}
        style={{width:'100%' ,height:"100%"}}
        >
            <ambientLight intensity={1} />
           <Cube />
           <OrbitControls />
            </Canvas>
    )
}