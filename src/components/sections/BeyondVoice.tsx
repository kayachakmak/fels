import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { GridOverlay } from '../ui/GridOverlay'
import { GradientText } from '../ui/GradientText'
import { AUTOMATION_EXAMPLES } from '../../lib/constants'
import { staggerContainer, fadeUpVariants, revealVariants } from '../../hooks/useInViewReveal'

const automationIcons: Record<string, React.ReactNode> = {
  dataEntry: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18M3 15h18"/></svg>,
  orderManagement: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 3H8l-4 8h16l-4-8z"/><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M12 11v4"/></svg>,
  crmWorkflows: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/><path d="M16 11l2 2 4-4"/></svg>,
  reporting: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M7 16l4-6 4 4 5-7"/></svg>,
}

export function BeyondVoice() {
  const { t } = useTranslation()

  return (
    <section id="automation" className="relative border-y border-border bg-bg-secondary py-24 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label={t('nav.automation')}
          title={<Trans i18nKey="beyondVoice.headline" components={{ g: <GradientText>{''}</GradientText> }} />}
          subtitle={t('beyondVoice.body')}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {AUTOMATION_EXAMPLES.map((key) => (
            <motion.div key={key} variants={fadeUpVariants}>
              <Card className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-border-hover text-accent">
                  {automationIcons[key]}
                </div>
                <h3 className="mb-2 text-[0.95rem] font-semibold text-text-primary">
                  {t(`beyondVoice.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t(`beyondVoice.${key}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-24 max-w-4xl text-center font-heading text-[clamp(2.1rem,3vw,2.5rem)] leading-[0.95] tracking-[0.03em] text-accent drop-shadow-[0_0_12px_rgba(77,101,255,0.35)] [text-shadow:0_0_18px_rgba(77,101,255,0.35),0_0_36px_rgba(77,101,255,0.18)]"
        >
          {t('beyondVoice.transition')}
        </motion.p>
      </div>
    </section>
  )
}
