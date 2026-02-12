import { motion } from 'framer-motion'

/**
 * Reusable section title with accent line.
 * @param {string} title - Section heading text
 * @param {boolean} [centered=true] - Center the header
 * @param {object} [animation] - Framer Motion props (initial, animate, transition)
 */
export default function SectionHeader({ title, centered = true, animation = {} }) {
  const initial = animation.initial ?? { opacity: 0, y: 30 }
  const animate = animation.animate ?? { opacity: 1, y: 0 }
  const transition = animation.transition ?? { duration: 0.5 }

  return (
    <motion.div
      className={`section-header ${centered ? 'section-header--centered' : ''}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </motion.div>
  )
}
