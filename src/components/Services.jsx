import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SectionHeader, Card, IconCircle } from './ui'
import { services } from '../data'
import { serviceIcons } from '../data/serviceIcons'

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Section id="service" className="services" ref={ref}>
      <SectionHeader
        title="Services"
        animation={{
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5 },
        }}
      />
      <div className="services-grid">
        {services.map((service, i) => (
          <Card
            key={service.title}
            className="service-card"
            hoverLift
            animation={{
              initial: { opacity: 0, y: 40 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.15 + i * 0.1, duration: 0.5 },
            }}
          >
            <IconCircle>{serviceIcons[service.iconId]}</IconCircle>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
