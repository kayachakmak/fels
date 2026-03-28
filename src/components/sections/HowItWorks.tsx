import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { GridOverlay } from '../ui/GridOverlay'
import { STEPS } from '../../lib/constants'
import { staggerContainer, fadeUpVariants } from '../../hooks/useInViewReveal'

const waveBars = [
  { height: 12, delay: 0 },
  { height: 22, delay: 0.1 },
  { height: 30, delay: 0.2 },
  { height: 22, delay: 0.3 },
  { height: 12, delay: 0.4 },
]

function PulsingLogoVisual() {
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-bg-secondary">
      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            border: '1px solid rgba(170,0,255,0.2)',
            animation: `pulse-out 3s ease-out ${i}s infinite`,
          }}
        />
      ))}

      {/* Hexagonal voice core */}
      <div
        className="relative z-10 flex items-center justify-center bg-bg-primary"
        style={{
          width: '90px',
          height: '90px',
          border: '2px solid #aa00ff',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        {/* Wave bars */}
        <div className="flex items-center gap-[3px]">
          {waveBars.map((bar, i) => (
            <div
              key={i}
              className="w-[3px] rounded-sm bg-accent"
              style={{
                height: `${bar.height}px`,
                animation: `wave 1.2s ease-in-out ${bar.delay}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label={t('nav.howItWorks')}
          title={t('howItWorks.headline')}
        />

        <div className="relative grid items-start gap-16 lg:grid-cols-2">
          {/* Pulsing logo — background on mobile, grid column on lg */}
          <div className="absolute inset-0 flex items-center justify-center lg:relative lg:inset-auto">
            <div className="opacity-30 lg:opacity-100 lg:w-full">
              <PulsingLogoVisual />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-10 flex flex-col"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step}
                variants={fadeUpVariants}
                className="flex gap-8 border-b border-border py-8 last:border-b-0"
              >
                <div className="font-heading text-[3.5rem] leading-none text-accent/[0.15]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-[0.02em] text-text-primary">
                    {t(`howItWorks.${step}.title`)}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-text-secondary">
                    {t(`howItWorks.${step}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
