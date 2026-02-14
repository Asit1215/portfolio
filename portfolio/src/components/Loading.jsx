import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
    >
      <div className="relative">
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-blue-500/30 border-t-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-purple-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 font-mono text-sm text-slate-400"
      >
        Loading portfolio...
      </motion.p>
      <motion.div
        className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-dark-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2 }}
        />
      </motion.div>
    </motion.div>
  )
}
