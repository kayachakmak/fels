export function GridOverlay({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%)',
      }}
    />
  )
}
