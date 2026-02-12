import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SkillBar } from './ui'
import { skills, about } from '../data'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="about" className="about" ref={ref}>
      <motion.div
        className="card about-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="about-grid">
          <div className="about-left">
            <div className="about-profile">
              <motion.div
                className="about-img-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img src="/img/kenil-1.jpeg" alt="Kenil Finaviya" className="about-img" />
              </motion.div>
              <div className="about-info">
                {about.info.map((item, i) => (
                  <motion.p
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <span className="label">{item.label}:</span> {item.value}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="skills">
              <motion.p
                className="skills-title"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Skills
              </motion.p>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                  inView={inView}
                  animation={{ delay: i * 0.06 }}
                />
              ))}
            </div>
          </div>
          <div className="about-right">
            <motion.h5
              className="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              About me
            </motion.h5>
            {about.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="about-text"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
