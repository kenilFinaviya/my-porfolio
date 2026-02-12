import { forwardRef } from 'react'

/**
 * Reusable section wrapper with consistent spacing.
 * @param {string} [id] - Section id for anchor links
 * @param {string} [className] - Additional CSS classes
 */
const Section = forwardRef(function Section({ id, className = '', children, ...rest }, ref) {
  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      ref={ref}
      {...rest}
    >
      {children}
    </section>
  )
})

export default Section
