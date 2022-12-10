import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader } from '@react-three/fiber'
import texture from '../public/images/moon.jpg'
import displacement from '../public/images/moon-displacement.jpg'
import { useRef } from 'react'

const Sphere = () => {
  const [moonMap, displacementMap] = useLoader(TextureLoader, [
    texture.src,
    displacement.src
  ])

  const myMoon = useRef()
  useFrame(() => {
    myMoon.current.rotation.x += 0.0001;  
    myMoon.current.rotation.y += 0.002;
  })

  return (
    <mesh ref={myMoon}>
      <sphereGeometry attach="geometry" args={[2, 60, 60]} />
      <meshPhongMaterial
        attach="material"
        map={moonMap}
        displacementMap={displacementMap}
        displacementScale={0.06}
        bumpMap={displacementMap}
        bumpScale={0.04}
        reflectivity={0}
        shininess={0}
      />
    </mesh>
  )
}

export default Sphere
