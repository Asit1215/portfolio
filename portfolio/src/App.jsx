import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>Asit Mandi | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in Node.js, React.js, and MongoDB. Building modern web applications." />
        <meta property="og:title" content="Asit Mandi | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer | Node.js | React.js | MongoDB" />
        <link rel="canonical" href="https://asitmandi.dev" />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading ? (
          <Loading key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
