import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Sphere from './moon-sphere'
import { Suspense } from 'react'
import { SpaceContainer, SpaceSpinner } from './space-loader'

import { useProgress } from '@react-three/drei'

const Space = () => {
  const { progress } = useProgress()

  return (
    <SpaceContainer>
      {progress && <SpaceSpinner />}
      <Canvas>
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>
    </SpaceContainer>
  )
}

export default Space
