import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Movie ticket booking Web Application',
    description: 'Developed a full-stack movie ticket booking platform enabling users to browse movies, watch trailers, select seats, and book tickets online. Implemented secure authentication using JWT, built RESTful APIs with Node.js and Express.js, integrated MongoDB for database management, and Razorpay for secure payment processing.',
    image: '/quickshow_mockup.png',
    link: 'https://quickshow-mu-teal.vercel.app/',
    github: 'https://github.com/Asit1215/Quick-Show-Again',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay']
  },
  {
    title: 'Healthcare & Service Appointment Platform (Medicare)',
    description: 'Medicare is a state-of-the-art, full-stack healthcare management application designed to bridge the gap between patients and medical professionals. The platform provides a seamless experience for users to discover healthcare services, book appointments with specialists, and manage medical visits through a modern digital interface.',
    image: '/medicare_mockup.png',
    link: 'https://medicare-client-0mny.onrender.com/',
    github: 'https://github.com/Asit1215/Medicare',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Coffee House',
    description: 'A Premium Responsive Website. A modern, highly responsive landing page for a fictional coffee shop. This project focuses on high-quality visuals, smooth animations, and a seamless user experience across all devices.',
    image: '/coffeehouse_mockup.png',
    link: 'https://coffee-neon-eight-11.vercel.app/',
    github: 'https://github.com/Asit1215/Coffee',
    tags: ['Next.js', 'Tailwind', 'Framer Motion']
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px] opacity-30" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] opacity-30" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl text-left">
            My <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover group overflow-hidden rounded-2xl flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags?.map(tag => (
                    <span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-medium text-blue-400 ring-1 ring-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
