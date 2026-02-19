import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90, icon: 'JS' },
  { name: 'React', level: 88, icon: '⚛' },
  { name: 'Node.js', level: 85, icon: '⬢' },
  { name: 'Python', level: 84, icon: '🐍' },
  { name: 'Django', level: 80, icon: 'D' },
  { name: 'MongoDB', level: 82, icon: '🍃' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-dark-800 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-12 rounded-2xl p-8 md:p-10"
        >
          <p className="text-slate-300 leading-relaxed md:text-lg">
            Hi, I'm Asit Mandi, a Full Stack Software Developer specializing in the MERN stack. I build secure, scalable, and performance-driven web applications with modern UI/UX and robust backend architecture. I have hands-on experience in authentication systems, RESTful API development, database optimization, and payment integration. I am passionate about solving real-world problems through clean and efficient code.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 font-mono text-lg text-blue-400">
                  {skill.icon}
                </span>
                <span className="font-medium text-white">{skill.name}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-dark-600">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              <p className="mt-1 text-right text-sm text-slate-500">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
