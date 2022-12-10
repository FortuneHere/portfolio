import { Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Galaxy = () => {
  const myStars = useRef()
  useFrame(() => {
    myStars.current.rotation.x += 0.0001
    myStars.current.rotation.y += 0.002
  })
  return <Stars ref={myStars} />
}

export default Galaxy
