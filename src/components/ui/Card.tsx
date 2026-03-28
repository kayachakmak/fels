import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden border border-border bg-bg-card p-8 transition-all duration-300 hover:bg-bg-card-hover ${className}`}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-400 group-hover:scale-x-100" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
