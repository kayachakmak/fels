interface LogoProps {
  className?: string
  pulsating?: boolean
  onClick?: () => void
}

export function Logo({ className = '', pulsating = false, onClick }: LogoProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick ? (e) => { e.preventDefault(); onClick() } : undefined}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={pulsating ? 'animate-logo-pulse' : ''}
        style={{ transformOrigin: 'center' }}
      >
        <defs>
          <radialGradient id="rainbow-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffdd00" />
            <stop offset="25%" stopColor="#ff8800" />
            <stop offset="45%" stopColor="#ff0000" />
            <stop offset="60%" stopColor="#aa00ff" />
            <stop offset="80%" stopColor="#4d65ff" />
            <stop offset="100%" stopColor="#0088ff" />
          </radialGradient>
          <radialGradient id="rainbow-radial-dim" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffdd00" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#ff0000" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#aa00ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id="rainbow-stroke-outer" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#aa00ff" />
            <stop offset="50%" stopColor="#4d65ff" />
            <stop offset="100%" stopColor="#0088ff" />
          </radialGradient>
          <radialGradient id="rainbow-stroke-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8800" />
            <stop offset="50%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#aa00ff" />
          </radialGradient>
        </defs>
        {/* Outer crystal facet */}
        <polygon points="16,1 28,8 28,22 16,31 4,22 4,8" fill="url(#rainbow-radial-dim)" stroke="url(#rainbow-stroke-outer)" strokeWidth="1.5" />
        {/* Inner facet */}
        <polygon points="16,6 23,10.5 23,21 16,26 9,21 9,10.5" fill="url(#rainbow-radial-dim)" stroke="url(#rainbow-stroke-inner)" strokeWidth="0.75" />
        {/* Core crystal — yellow center */}
        <polygon points="16,11 19.5,13.5 19.5,18.5 16,21 12.5,18.5 12.5,13.5" fill="url(#rainbow-radial)" opacity="0.9" />
        {/* Highlight lines */}
        <line x1="16" y1="1" x2="16" y2="6" stroke="url(#rainbow-stroke-inner)" strokeWidth="0.5" opacity="0.4" />
        <line x1="4" y1="8" x2="9" y2="10.5" stroke="url(#rainbow-stroke-inner)" strokeWidth="0.5" opacity="0.4" />
        <line x1="28" y1="8" x2="23" y2="10.5" stroke="url(#rainbow-stroke-inner)" strokeWidth="0.5" opacity="0.4" />
      </svg>
      <span className="font-heading text-lg font-bold tracking-[0.15em] text-text-primary">
        FELS
      </span>
    </a>
  )
}
