import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Particles from '../components/Particles'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient px-6 pt-20"
    >
      <Particles />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-sm" />
            <img
              src="/profile.png"
              alt="Asit Mandi"
              className="relative h-32 w-32 rounded-full object-cover ring-2 ring-white/20 ring-offset-2 ring-offset-dark-900 md:h-40 md:w-40"
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-blue-400 text-sm md:text-base"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 min-h-[3rem] md:min-h-[4rem]"
        >
          <TypeAnimation
            sequence={[
              "Hi, I'm Asit Mandi",
              1500,
              "Hi, I'm a Full Stack Developer",
              1500,
              "Hi, I'm a Software Developer",
              1500,
              "Hi, I'm Asit Mandi",
              Infinity,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-lg text-slate-400 md:text-xl"
        >
           Software Developer | Node.js | React.js | Express.js | MongoDB | Python | Django |
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:shadow-blue-500/40 hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 transition group-hover:opacity-100" />
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="glass glass-hover rounded-lg border border-blue-500/30 px-6 py-3 font-medium text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block text-slate-500"
          aria-label="Scroll to about"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}
