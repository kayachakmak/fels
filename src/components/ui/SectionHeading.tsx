import { motion } from 'framer-motion'
import { revealVariants } from '../../hooks/useInViewReveal'

interface SectionHeadingProps {
  label?: string
  title?: React.ReactNode
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-16 max-w-[640px]"
    >
      {label && (
        <span
          className="mb-6 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(77,101,255,0.5)]"
          style={{ backgroundImage: 'var(--gradient-brand)' }}
        >
          <span className="inline-block h-px w-8 shadow-[0_0_6px_rgba(77,101,255,0.6),0_0_16px_rgba(0,136,255,0.3)]" style={{ backgroundImage: 'var(--gradient-brand-line)' }} />
          {label}
        </span>
      )}
      {title && (
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[0.04em] text-text-primary" >
          {title}
        </h2>
      )}
      {label && (
        <div className="mt-5 h-px w-16 opacity-30" style={{ backgroundImage: 'var(--gradient-brand-line)' }} />
      )}
      {subtitle && (
        <p className="mt-5 text-[0.95rem] leading-[1.7] text-text-secondary " >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
