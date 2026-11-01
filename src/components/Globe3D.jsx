import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function GlobeMesh() {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
    if (wireRef.current) {
      wireRef.current.rotation.y += delta * 0.15
    }
  })

  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 256
    const ctx = canvas.getContext('2d')

    // Deep ocean base
    const gradient = ctx.createLinearGradient(0, 0, 0, 256)
    gradient.addColorStop(0, '#1a3a5c')
    gradient.addColorStop(0.3, '#1e4a6e')
    gradient.addColorStop(0.5, '#234d6e')
    gradient.addColorStop(0.7, '#1e4a6e')
    gradient.addColorStop(1, '#1a3a5c')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 256)

    // Add some "land" shapes
    ctx.fillStyle = '#3d7a4a'
    // Central Asia region (roughly)
    ctx.beginPath()
    ctx.ellipse(300, 90, 40, 25, 0, 0, Math.PI * 2)
    ctx.fill()

    // Europe
    ctx.beginPath()
    ctx.ellipse(260, 70, 30, 20, -0.3, 0, Math.PI * 2)
    ctx.fill()

    // Africa
    ctx.fillStyle = '#4a8a55'
    ctx.beginPath()
    ctx.ellipse(260, 140, 25, 45, 0, 0, Math.PI * 2)
    ctx.fill()

    // Asia
    ctx.fillStyle = '#3d7a4a'
    ctx.beginPath()
    ctx.ellipse(350, 100, 55, 35, 0, 0, Math.PI * 2)
    ctx.fill()

    // Americas
    ctx.beginPath()
    ctx.ellipse(130, 100, 25, 55, 0.2, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.ellipse(140, 160, 20, 35, 0.3, 0, Math.PI * 2)
    ctx.fill()

    // Glow for Uzbekistan region
    const uzGlow = ctx.createRadialGradient(310, 85, 0, 310, 85, 15)
    uzGlow.addColorStop(0, 'rgba(251, 191, 36, 0.8)')
    uzGlow.addColorStop(0.5, 'rgba(251, 191, 36, 0.3)')
    uzGlow.addColorStop(1, 'rgba(251, 191, 36, 0)')
    ctx.fillStyle = uzGlow
    ctx.fillRect(290, 70, 40, 30)

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.ClampToEdgeWrapping
    return texture
  }, [])

  return (
    <group>
      {/* Main globe */}
      <Sphere ref={meshRef} args={[2, 48, 48]}>
        <meshPhongMaterial
          map={gradientTexture}
          transparent
          opacity={0.85}
          shininess={30}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere ref={wireRef} args={[2.02, 24, 24]}>
        <meshBasicMaterial
          color="#fbbf24"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#4c6ef5"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

export default function Globe3D() {
  // Check for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="globe-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} color="#fef3c7" />
        <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#bac8ff" />
        <GlobeMesh />
        {!prefersReducedMotion && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI * 0.7}
            minPolarAngle={Math.PI * 0.3}
          />
        )}
      </Canvas>
    </div>
  )
}
