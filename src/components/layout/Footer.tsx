import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        {/* Left: logo + tagline */}
        <div className="flex items-center gap-4">
          <Logo />
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <span className="font-mono text-xs text-text-secondary">
            {t('footer.tagline')}
          </span>
        </div>

        {/* Right: copyright */}
        <p className="font-mono text-[0.7rem] tracking-[0.08em] text-text-secondary">
          &copy; {year} Fels Automation. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
