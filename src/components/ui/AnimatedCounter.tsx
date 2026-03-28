import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const skipAnimation = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    if (skipAnimation) {
      // Use rAF to avoid synchronous setState in effect body
      const id = requestAnimationFrame(() => setDisplayValue(value))
      return () => cancelAnimationFrame(id)
    }

    const startTime = performance.now()
    let rafId: number

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(eased * value))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, value, duration, skipAnimation])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}
