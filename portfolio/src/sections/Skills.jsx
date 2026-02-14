import { motion } from 'framer-motion'

const categories = {
  Frontend: [
    { name: 'React', icon: '⚛' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'HTML/CSS', icon: '◻' },
    { name: 'Tailwind', icon: '◆' },
    { name: 'Redux', icon: '⊕' },
  ],
  Backend: [
    { name: 'Node.js', icon: '⬢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: 'D' },
    { name: 'Express', icon: 'E' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'REST APIs', icon: '⎋' },
    { name: 'Socket.io', icon: '⚡' },
  ],
  Tools: [
    { name: 'Git', icon: '⎇' },
    { name: 'VS Code', icon: '⌨' },
    { name: 'Figma', icon: 'F' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Docker', icon: '🐳' },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-dark-800 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Skills & <span className="gradient-text">Tools</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {Object.entries(categories).map(([category, skillsList]) => (
            <motion.div
              key={category}
              variants={item}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-white border-b border-white/10 pb-2">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {skillsList.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-slate-300 transition hover:bg-blue-500/20 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <span className="font-mono text-blue-400">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
