import { motion } from 'framer-motion'

/**
 * Animated skill progress bar.
 * @param {string} name - Skill name
 * @param {number} percent - 0-100
 * @param {boolean} [inView] - Whether to animate (from useInView)
 * @param {object} [animation] - Optional delay for stagger
 */
export default function SkillBar({ name, percent, inView = true, animation = {} }) {
  const { delay = 0 } = animation

  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.45 + delay, duration: 0.4 }}
    >
      <span className="skill-name">{name}</span>
      <span className="skill-pct">{percent}%</span>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ delay: 0.5 + delay, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
