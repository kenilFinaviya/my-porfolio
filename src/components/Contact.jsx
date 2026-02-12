import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SocialLink } from './ui'
import { socials } from '../data'
import { socialIcons } from '../data/socialIcons'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Section id="contact" className="contact" ref={ref}>
      <div className="contact-bg">
        <img src="/img/overlay-bg.jpg" alt="" />
        <div className="contact-overlay" />
      </div>
      <motion.div
        className="card contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-info">
          <motion.a
            href="tel:+919099946540"
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 4 }}
          >
            <span className="contact-icon">
              <PhoneIcon />
            </span>
            (+91) 9099946540
          </motion.a>
          <motion.p
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
          >
            <span className="contact-icon">
              <EmailIcon />
            </span>
            finaviyakenil@gmail.com
          </motion.p>
        </div>
        <div className="contact-socials">
          {socials.map((s, i) => (
            <SocialLink
              key={s.label}
              href={s.href}
              label={s.label}
              icon={socialIcons[s.icon]}
              inView={inView}
              animationDelay={i * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
