import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SectionHeader, Lightbox } from './ui'
import { projects } from '../data'

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [lightboxProject, setLightboxProject] = useState(null)

  return (
    <Section id="work" className="work" ref={ref}>
      <SectionHeader
        title="Projects"
        animation={{
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5 },
        }}
      />
      <div className="work-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="card work-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            onClick={() => setLightboxProject(project)}
          >
            <div className="work-img-wrap">
              <img src={project.image} alt={project.title} />
              <div className="work-overlay">
                <span className="work-overlay-text">
                  <span className="work-plus">+</span>
                  <span className="work-view-label">View</span>
                </span>
              </div>
            </div>
            <div className="work-info">
              <h3 className="work-title">{project.title}</h3>
              <span className="work-category">{project.category}</span>
            </div>
          </motion.article>
        ))}
      </div>
      <Lightbox
        isOpen={!!lightboxProject}
        onClose={() => setLightboxProject(null)}
        title={lightboxProject?.title}
        imageSrc={lightboxProject?.image}
        imageAlt={lightboxProject?.title ?? ''}
      />
    </Section>
  )
}
