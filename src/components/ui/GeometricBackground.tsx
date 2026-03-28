const shapes = [
  { type: 'hexagon', size: 90, x: '8%', y: '18%', delay: '0s', duration: '22s', opacity: 0.25, stroke: '#aa00ff' },
  { type: 'triangle', size: 65, x: '82%', y: '12%', delay: '2s', duration: '26s', opacity: 0.2, stroke: '#cc66ff' },
  { type: 'circle', size: 45, x: '72%', y: '55%', delay: '4s', duration: '19s', opacity: 0.22, stroke: '#8800cc' },
  { type: 'diamond', size: 55, x: '18%', y: '68%', delay: '1s', duration: '23s', opacity: 0.25, stroke: '#aa00ff' },
  { type: 'hexagon', size: 110, x: '92%', y: '78%', delay: '3s', duration: '30s', opacity: 0.15, stroke: '#7700bb' },
  { type: 'triangle', size: 40, x: '48%', y: '8%', delay: '5s', duration: '17s', opacity: 0.2, stroke: '#cc66ff' },
  { type: 'circle', size: 75, x: '32%', y: '42%', delay: '2s', duration: '28s', opacity: 0.18, stroke: '#aa00ff' },
  { type: 'diamond', size: 50, x: '62%', y: '88%', delay: '0s', duration: '25s', opacity: 0.22, stroke: '#8800cc' },
  { type: 'hexagon', size: 60, x: '55%', y: '35%', delay: '6s', duration: '20s', opacity: 0.18, stroke: '#cc66ff' },
  { type: 'circle', size: 35, x: '85%', y: '40%', delay: '3s', duration: '16s', opacity: 0.2, stroke: '#aa00ff' },
]

function ShapeSVG({ type, size, stroke }: { type: string; size: number; stroke: string }) {
  const half = size / 2

  switch (type) {
    case 'hexagon': {
      const r = half * 0.9
      const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2
        return `${half + r * Math.cos(angle)},${half + r * Math.sin(angle)}`
      }).join(' ')
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={points} fill="none" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    }
    case 'triangle': {
      const points = `${half},${size * 0.1} ${size * 0.9},${size * 0.9} ${size * 0.1},${size * 0.9}`
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={points} fill="none" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    }
    case 'circle':
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={half} cy={half} r={half * 0.8} fill="none" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'diamond': {
      const points = `${half},${size * 0.05} ${size * 0.95},${half} ${half},${size * 0.95} ${size * 0.05},${half}`
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={points} fill="none" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    }
    default:
      return null
  }
}

export function GeometricBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Geometric ring — outer */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '8%',
          top: '18%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1px solid rgba(170,0,255,0.18)',
        }}
      />

      {/* Geometric ring — inner */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '14%',
          top: '26%',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px solid rgba(170,0,255,0.25)',
        }}
      />

      {/* Geometric hex accent */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '22%',
          top: '34%',
          width: '80px',
          height: '80px',
          background: 'rgba(170,0,255,0.14)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />

      {/* Gradient line accent */}
      <div
        className="absolute hidden md:block"
        style={{
          left: 0,
          bottom: '30%',
          width: '180px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(170,0,255,0.4))',
        }}
      />

      {/* Dot grid accent */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '3%',
          bottom: '20%',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '12px',
        }}
      >
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={i}
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: 'rgba(170,0,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute hidden sm:block"
          style={{
            left: shape.x,
            top: shape.y,
            opacity: shape.opacity,
            animation: `float-slow ${shape.duration} ease-in-out ${shape.delay} infinite`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div style={{ animation: `spin-slow ${parseFloat(shape.duration) * 2}s linear ${shape.delay} infinite` }}>
            <ShapeSVG type={shape.type} size={shape.size} stroke={shape.stroke} />
          </div>
        </div>
      ))}
    </div>
  )
}
