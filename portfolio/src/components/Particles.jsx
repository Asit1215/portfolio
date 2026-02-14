import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 40

function Particle({ delay, duration, x, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
      style={{
        left: `${x}%`,
        width: size,
        height: size,
        bottom: '-10%',
      }}
      animate={{
        y: [0, -1100],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
      }}
    />
  )
}

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      x: Math.random() * 100,
      size: 2 + Math.random() * 4,
    }))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <Particle
          key={p.id}
          delay={p.delay}
          duration={p.duration}
          x={p.x}
          size={p.size}
        />
      ))}
    </div>
  )
}
