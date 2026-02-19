import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Movie ticket booking Web Application',
    description: 'Developed a full-stack movie ticket booking platform enabling users to browse movies, watch trailers, select seats, and book tickets online. Implemented secure authentication using JWT, built RESTful APIs with Node.js and Express.js, integrated MongoDB for database management, and Razorpay for secure payment processing. Designed a responsive user interface using React and optimized application performance for seamless booking experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Asit1215/Quick-Show-Again',
    live: 'https://quickshow-mu-teal.vercel.app/',
  },
  
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-dark-900 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group glass glass-hover relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] hover:shadow-blue-500/20 md:p-8"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition group-hover:bg-purple-500/20" />

              <h3 className="relative text-xl font-semibold text-white md:text-2xl">
                {project.title}
              </h3>
              <p className="relative mt-3 text-slate-400">
                {project.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
