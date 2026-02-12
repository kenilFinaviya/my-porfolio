/**
 * Circular icon wrapper (e.g. for service icons).
 */
export default function IconCircle({ children, className = '' }) {
  return (
    <div className={`icon-circle ${className}`.trim()}>
      {children}
    </div>
  )
}
