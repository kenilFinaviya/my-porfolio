import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen lightbox modal for images.
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {string} [title] - Caption below image
 * @param {React.ReactNode} [children] - Custom content, or use imageSrc
 * @param {string} [imageSrc] - Image URL (used if children not provided)
 * @param {string} [imageAlt] - Alt text for image
 */
export default function Lightbox({ isOpen, onClose, title, children, imageSrc, imageAlt = '' }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="lightbox-inner"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children ?? (imageSrc && <img src={imageSrc} alt={imageAlt} />)}
            {title && <p className="lightbox-title">{title}</p>}
            <button
              type="button"
              className="lightbox-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
