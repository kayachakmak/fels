import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GridOverlay } from '../ui/GridOverlay'
import { staggerContainer, fadeUpVariants } from '../../hooks/useInViewReveal'

interface Testimonial {
  quote: string
  author: string
}

function FelsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="stats-radial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffdd00" />
          <stop offset="25%" stopColor="#ff8800" />
          <stop offset="45%" stopColor="#ff0000" />
          <stop offset="60%" stopColor="#aa00ff" />
          <stop offset="80%" stopColor="#4d65ff" />
          <stop offset="100%" stopColor="#0088ff" />
        </radialGradient>
        <radialGradient id="stats-radial-dim" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffdd00" stopOpacity="0.15" />
          <stop offset="40%" stopColor="#ff0000" stopOpacity="0.1" />
          <stop offset="70%" stopColor="#aa00ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0088ff" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="stats-stroke-outer" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#aa00ff" />
          <stop offset="50%" stopColor="#4d65ff" />
          <stop offset="100%" stopColor="#0088ff" />
        </radialGradient>
        <radialGradient id="stats-stroke-inner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8800" />
          <stop offset="50%" stopColor="#ff0000" />
          <stop offset="100%" stopColor="#aa00ff" />
        </radialGradient>
      </defs>
      <polygon points="16,1 28,8 28,22 16,31 4,22 4,8" fill="url(#stats-radial-dim)" stroke="url(#stats-stroke-outer)" strokeWidth="1.5" />
      <polygon points="16,6 23,10.5 23,21 16,26 9,21 9,10.5" fill="url(#stats-radial-dim)" stroke="url(#stats-stroke-inner)" strokeWidth="0.75" />
      <polygon points="16,11 19.5,13.5 19.5,18.5 16,21 12.5,18.5 12.5,13.5" fill="url(#stats-radial)" opacity="0.9" />
    </svg>
  )
}

const accentGradients = [
  'linear-gradient(135deg, #aa00ff 0%, #4d65ff 100%)',
  'linear-gradient(135deg, #4d65ff 0%, #0088ff 100%)',
  'linear-gradient(135deg, #0088ff 0%, #aa00ff 100%)',
]

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const gradient = accentGradients[index % accentGradients.length]

  return (
    <motion.blockquote
      variants={fadeUpVariants}
      className="relative border border-border bg-bg-primary/60 backdrop-blur-sm transition-colors hover:border-border-hover"
    >
      <div
        className="absolute top-0 left-0 h-px w-14 opacity-50"
        style={{ backgroundImage: gradient }}
      />

      <div className="px-5 py-3 md:px-6 md:py-4">
        <span
          className="block text-2xl leading-none bg-clip-text text-transparent select-none"
          style={{ backgroundImage: gradient }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <p className="mt-1 text-[0.85rem] leading-[1.75] text-text-secondary">
          {item.quote}
        </p>

        <cite className="mt-3 flex items-center gap-2 not-italic">
          <FelsIcon className="h-4 w-4 shrink-0" />
          <span className="text-[0.7rem] font-semibold tracking-wide text-text-primary">
            {item.author}
          </span>
        </cite>
      </div>
    </motion.blockquote>
  )
}

export function Stats() {
  const { t } = useTranslation()
  const testimonials = (t('stats.testimonials', { returnObjects: true }) ?? []) as Testimonial[]

  return (
    <section className="relative flex items-center border-y border-border bg-bg-secondary overflow-hidden py-12 md:py-16">
      <GridOverlay />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <FelsIcon className="h-72 w-72 opacity-[0.03]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8"
      >
        {/* Left: Melona (1), Right: Aslıhan (2) & Meicomed (3) offset down */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
          {/* Left column — card 1 (Melona), pushed down */}
          <div className="md:w-1/2 md:pt-[10vh]">
            {testimonials[0] && (
              <TestimonialCard item={testimonials[0]} index={0} />
            )}
          </div>

          {/* Right column — cards 2 (Aslıhan) & 3 (Meicomed), pulled up */}
          <div className="md:w-1/2 flex flex-col gap-4 md:gap-6">
            {testimonials[1] && (
              <TestimonialCard item={testimonials[1]} index={1} />
            )}
            {testimonials[2] && (
              <TestimonialCard item={testimonials[2]} index={2} />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
