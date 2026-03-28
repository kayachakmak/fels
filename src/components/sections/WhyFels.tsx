import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { GridOverlay } from '../ui/GridOverlay'
import { GradientText } from '../ui/GradientText'
import { staggerContainer, fadeUpVariants } from '../../hooks/useInViewReveal'

const WHY_FELS_KEYS = ['b2b', 'custom', 'fast', 'support', 'gdpr'] as const

const icons: Record<string, React.ReactNode> = {
  b2b: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1"/></svg>,
  custom: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l1.5 4.5H18l-3.5 2.5L16 15l-4-3-4 3 1.5-5L6 7.5h4.5z"/></svg>,
  fast: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  support: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12a8 8 0 0 1 16 0"/><path d="M2 16a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M17 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/></svg>,
  gdpr: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l7 4v6c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg>,
}

export function WhyFels() {
  const { t } = useTranslation()

  return (
    <section className="relative border-y border-border py-24 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label={t('whyFels.headline')} title={<Trans i18nKey="whyFels.tagline" components={{ g: <GradientText>{''}</GradientText> }} />} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_FELS_KEYS.map((key) => (
            <motion.div key={key} variants={fadeUpVariants}>
              <Card className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-border-hover text-accent">
                  {icons[key]}
                </div>
                <h3 className="mb-2 text-[0.95rem] font-semibold text-text-primary">
                  {t(`whyFels.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t(`whyFels.${key}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
