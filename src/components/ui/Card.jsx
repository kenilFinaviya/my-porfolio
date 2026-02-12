import { motion } from 'framer-motion'

/**
 * Reusable card container with optional hover animation.
 * @param {React.ReactNode} children
 * @param {string} [className] - Additional classes (e.g. 'service-card', 'work-card')
 * @param {boolean} [hoverLift] - Enable lift on hover
 * @param {object} [animation] - Framer Motion props for initial entrance
 * @param {string} [as='div'] - 'div' or 'article'
 * @param {function} [onClick]
 */
export default function Card({
  children,
  className = '',
  hoverLift = false,
  animation = {},
  as = 'div',
  onClick,
  ...rest
}) {
  const { initial = { opacity: 0, y: 40 }, animate = { opacity: 1, y: 0 }, transition = { duration: 0.5 } } = animation

  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={`card ${className}`.trim()}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={hoverLift ? { y: -8, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  )
}
