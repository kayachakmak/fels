import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { Button } from '../ui/Button'
import { GridOverlay } from '../ui/GridOverlay'
import { GradientText } from '../ui/GradientText'
import { BOOKING_URL } from '../../lib/constants'
import { revealVariants } from '../../hooks/useInViewReveal'

export function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden border border-border-hover bg-bg-secondary p-10 md:p-16">
        {/* Top accent gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent" />

        {/* Background watermark text */}
        <div
          className="pointer-events-none absolute -right-4 -top-4 font-heading text-[10rem] tracking-[0.08em] text-accent/[0.04] select-none"
          aria-hidden="true"
        >
          FELS
        </div>

        <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <motion.h2
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[0.03em] text-text-primary"
            >
              <Trans i18nKey="finalCta.headline" components={{ g: <GradientText>{''}</GradientText> }} />
            </motion.h2>

            <motion.p
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 max-w-[400px] text-[0.95rem] leading-relaxed text-text-secondary"
            >
              {t('finalCta.subtext')}
            </motion.p>
          </div>

          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button href={BOOKING_URL} variant="primary">
              {t('finalCta.cta')} &rarr;
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
