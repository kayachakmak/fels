type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonAsLink = {
  variant?: Variant
  href: string
  external?: boolean
  children?: React.ReactNode
  className?: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

type ButtonAsButton = {
  variant?: Variant
  href?: never
  external?: never
  children?: React.ReactNode
  className?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent text-[#0a0a0a] font-mono hover:bg-accent-hover transition-all duration-200 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]',
  secondary:
    'border border-border-hover text-text-secondary font-mono hover:text-text-primary hover:border-text-secondary transition-all duration-200 bg-transparent',
  ghost:
    'text-text-secondary hover:text-text-primary transition-colors duration-200 bg-transparent',
}

function isExternal(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function Button({ variant = 'primary', href, external, children, className = '', ...props }: ButtonProps) {
  const styles = `inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-[0.06em] cursor-pointer ${variantStyles[variant]} ${className}`

  if (href) {
    const opensNewTab = external ?? isExternal(href)
    return (
      <a
        href={href}
        className={styles}
        {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={styles} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
