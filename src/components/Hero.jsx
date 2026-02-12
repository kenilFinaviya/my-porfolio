import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Frontend Developer', 'Web Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src="/img/kenil.jpg" alt="" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Kenil Finaviya
        </motion.h1>
        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="role-text">{ROLES[roleIndex]}</span>
          <span className="cursor" />
        </motion.div>
        <motion.a
          href="#about"
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn more
        </motion.a>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>↓</span>
      </div>
    </section>
  )
}
