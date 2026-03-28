import { useTranslation } from 'react-i18next'

const MARQUEE_KEYS = [
  'voiceAgents',
  'outboundSales',
  'inboundHandling',
  'leadQualification',
  'warehouseOps',
  'crmIntegration',
  'appointmentBooking',
  'b2bProspecting',
  'callAutomation',
  'logistics',
] as const

export function Marquee() {
  const { t } = useTranslation()

  const items = MARQUEE_KEYS.map((key) => t(`marquee.${key}`))
  // Double the items for seamless infinite scroll
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border bg-bg-secondary py-4">
      <div className="marquee-track flex w-max gap-12">
        {doubled.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-text-secondary"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent animate-[marquee-pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${(i % 10) * 0.2}s` }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
