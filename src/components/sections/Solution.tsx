import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GridOverlay } from '../ui/GridOverlay'
import { staggerContainer, fadeUpVariants, revealVariants } from '../../hooks/useInViewReveal'

const serviceIcons = [
  // Inbound — phone
  <svg key="inbound" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 .01 1.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" /></svg>,
  // Outbound — box
  <svg key="outbound" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><polyline points="22 8 22 22 2 22 2 8" /><rect x="2" y="2" width="20" height="6" /><line x1="12" y1="12" x2="12" y2="18" /><line x1="9" y1="15" x2="15" y2="15" /></svg>,
  // Booking — calendar
  <svg key="booking" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
]

interface Service {
  title: string
  description: string
  tags: string[]
}

export function Solution() {
  const { t } = useTranslation()
  const services = (t('solution.services', { returnObjects: true }) ?? []) as Service[]

  return (
    <section id="solution" className="relative py-24 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Header — matches HTML's services-header */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-[640px]"
        >
          <span
            className="mb-6 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(77,101,255,0.5)]"
            style={{ backgroundImage: 'var(--gradient-brand)' }}
          >
            <span className="inline-block h-px w-8 shadow-[0_0_6px_rgba(77,101,255,0.6),0_0_16px_rgba(0,136,255,0.3)]" style={{ backgroundImage: 'var(--gradient-brand-line)' }} />
            {t('solution.label')}
          </span>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[0.04em] text-text-primary">
            {t('solution.title1')}<br />
            <span className="text-accent-soft">{t('solution.title2')}</span>
          </h2>
          <div className="mt-5 h-px w-16 opacity-30" style={{ backgroundImage: 'var(--gradient-brand-line)' }} />
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid border border-border md:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="group relative overflow-hidden border-b border-border p-5 transition-colors duration-300 hover:bg-bg-secondary md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-400 group-hover:scale-x-100" />

              {/* Number + Icon */}
              <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
                <div className="font-heading text-[3rem] leading-none tracking-[0.04em] text-accent/[0.18] md:mb-2 md:text-[5rem]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex h-11 w-11 items-center justify-center border border-border-hover text-accent md:mb-6">
                  {serviceIcons[i]}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-heading text-[1.8rem] leading-[1.1] tracking-[0.05em] text-text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[0.9rem] leading-relaxed text-text-secondary">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-hover px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
