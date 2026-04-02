import { useEffect, useRef, useState } from 'react'
import { Logo } from '../components/ui/Logo'

export function DemoPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const audio = new Audio('/demo.mp3')
    audioRef.current = audio

    audio.addEventListener('ended', () => setIsPlaying(false))

    audio.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      setShowHint(true)
    })

    return () => {
      audio.pause()
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  const handleLogoClick = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
      setShowHint(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-12">
        <div className="relative flex items-center justify-center" style={{ width: 380, height: 380 }}>
          {/* Diamond pulse rings — same style as PulsingLogoVisual */}
          {isPlaying && [0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute"
              style={{
                border: '1px solid rgba(170,0,255,0.25)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animation: `pulse-out 3s ease-out ${i}s infinite`,
              }}
            />
          ))}
          <Logo onClick={handleLogoClick} className="scale-[4] relative z-10" />
        </div>
        {showHint && (
          <p className="text-text-secondary text-sm tracking-wide uppercase animate-[fadeUp_0.4s_ease-out]">
            Oynatmak için tıklayınız
          </p>
        )}
      </div>
    </div>
  )
}
