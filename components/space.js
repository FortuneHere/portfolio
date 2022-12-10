import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Box, Spinner } from '@chakra-ui/react'
import Sphere from './moon-sphere'

const Space = () => {
  return (
    <Box
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      <Canvas>
        <Stars />
        <OrbitControls enableZoom={false} autoRotate />
        <hemisphereLight
          color={0xffffff}
          groundColor={0xffffff}
          intensity={0.1}
        />
        <directionalLight
          color={0xffffff}
          intensity={0.5}
          position={[-100, 10, 50]}
        />
        <Sphere />
      </Canvas>
    </Box>
  )
}

export default Space
