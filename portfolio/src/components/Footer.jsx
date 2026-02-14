import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/10 bg-dark-800 py-8"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {year} Asit Mandi. Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </motion.footer>
  )
}
