import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import texture from '../public/images/moon.jpg'
import displacement from '../public/images/moon-displacement.jpg'

const Sphere = () => {
  const [moonMap, displacementMap] = useLoader(TextureLoader, [
    texture.src,
    displacement.src
  ])

  return (
    <mesh>
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
