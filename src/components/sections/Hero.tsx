import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { GeometricBackground } from '../ui/GeometricBackground'
import { BOOKING_URL } from '../../lib/constants'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <GeometricBackground />

      {/* Radial orb glow */}
      <div
        className="pointer-events-none absolute"
        aria-hidden="true"
        style={{
          right: '-10%',
          top: '10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(170,0,255,0.09), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-8 pt-24 md:block md:flex-none md:py-24 md:px-8">

        {/* Headline — BUILT LIKE ROCK. */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 font-heading text-[24vw] leading-[0.9] tracking-[0.02em] text-text-primary md:mt-0 md:text-[clamp(5rem,12vw,10.5rem)]"
        >
          {t('hero.line1')}<br />
          {t('hero.line2')}<br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'var(--gradient-brand)' }}
          >
            {t('hero.line3')}
          </span>
        </motion.h1>

        {/* Subheadline + Actions — pushed to bottom on mobile */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 max-w-[520px] text-[1.1rem] leading-relaxed text-text-secondary"
          >
            {t('hero.subheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex items-center gap-4"
          >
            <Button href={BOOKING_URL} variant="primary">
              {t('hero.ctaPrimary')} &rarr;
            </Button>
            <Button href="#how-it-works" variant="secondary">
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  )
}
