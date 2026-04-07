import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building robust and scalable web applications using the MERN stack. I focus on delivering end-to-end solutions that bridge technical excellence and user experience.',
    features: [
      'Comprehensive end-to-end development from database architecture to frontend deployment.',
      'Modernizing legacy applications using the latest stable technology stacks.',
      'Implementing secure user authentication and complex authorization systems.',
      'Deployment and optimization on cloud platforms like Vercel, Netlify, or Render.'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Backend Architecture',
    description: 'Designing secure and efficient RESTful APIs with Node.js and Express. I specialize in ensuring your application remains fast, secure, and reliable under heavy traffic.',
    features: [
      'Highly optimized database schemas for fast query performance and data integrity.',
      'Scalable server environments designed for high availability and low latency.',
      'Real-time data processing and synchronization using WebSockets.',
      'Third-party API integrations and custom payment gateway implementations.'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: 'UI/UX Implementation',
    description: 'Translating complex designs into pixel-perfect, interactive user interfaces. I create fluid animations and intuitive layouts that keep users engaged and delighted.',
    features: [
      'Pixel-perfect conversion of Figma/Adobe XD designs into responsive React components.',
      'Implementation of complex animations and micro-interactions for an immersive experience.',
      'Cross-device compatibility ensured through mobile-first development paradigms.',
      'Focus on accessibility (A11y) and SEO-friendly semantic HTML structure.'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L10 17.657" />
      </svg>
    )
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services" className="relative scroll-mt-20 py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-slate-400">Specialized solutions for modern digital challenges</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover group flex flex-col rounded-2xl p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 transition-all group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-8 text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <button 
                onClick={() => setSelectedService(service)}
                className="mt-auto flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-purple-400 transition-all duration-300 group/link outline-none"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover/link:bg-[length:100%_2px]">
                  Learn more
                </span>
                <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#12121e] border border-white/10 shadow-2xl p-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                {selectedService.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="mb-8 text-slate-400 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">What's Included:</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <svg className="mt-1 h-4 w-4 shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="btn-primary mt-8 w-full"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
