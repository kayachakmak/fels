export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: 'var(--gradient-brand)' }}
    >
      {children}
    </span>
  )
}
