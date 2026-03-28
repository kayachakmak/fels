import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { GridOverlay } from '../ui/GridOverlay'
import { GradientText } from '../ui/GradientText'
import { INDUSTRIES } from '../../lib/constants'
import { staggerContainer, fadeUpVariants } from '../../hooks/useInViewReveal'

const industryIcons: Record<string, React.ReactNode> = {
  warehouses: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>,
  healthcare: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6v12M6 12h12"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
  realEstate: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  homeServices: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  legal: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 7l9-4 9 4"/><path d="M3 7v2a9 9 0 0 0 18 0V7"/><path d="M8 21h8"/></svg>,
  insurance: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z"/></svg>,
}

export function Industries() {
  const { t } = useTranslation()

  return (
    <section id="industries" className="relative py-24 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label={t('nav.industries')}
          title={<Trans i18nKey="industries.headline" components={{ g: <GradientText>{''}</GradientText> }} />}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((key) => (
            <motion.div
              key={key}
              variants={fadeUpVariants}
              className="group bg-bg-primary p-8 transition-colors duration-200 hover:bg-bg-tertiary"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center border border-border-hover text-text-secondary transition-all duration-200 group-hover:bg-accent group-hover:text-[#0a0a0a]">
                {industryIcons[key]}
              </div>
              <h3 className="mb-2 text-[0.95rem] font-semibold text-text-primary">
                {t(`industries.${key}.title`)}
              </h3>
              <p className="font-mono text-[0.8rem] leading-relaxed text-text-secondary">
                {t(`industries.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
