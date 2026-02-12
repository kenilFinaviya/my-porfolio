import { motion } from 'framer-motion'

/**
 * Social link with icon (e.g. LinkedIn, Instagram).
 * @param {string} href - URL
 * @param {string} label - Aria-label
 * @param {React.ReactNode} icon - Icon component or element
 * @param {boolean} [inView] - For entrance animation
 * @param {number} [animationDelay=0]
 */
export default function SocialLink({ href, label, icon, inView = true, animationDelay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.3 + animationDelay }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}
