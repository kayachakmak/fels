import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { Button } from '../ui/Button'
import { NAV_LINKS, BOOKING_URL } from '../../lib/constants'

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-bg-primary/85 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between px-5 py-4 md:px-12">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-mono text-sm tracking-[0.04em] text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />
          <Button href={BOOKING_URL} variant="primary">
            {t('nav.cta')}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-text-primary"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {isOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div ref={menuRef} role="menu" className="border-t border-border bg-bg-primary/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-5 py-6">
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                role="menuitem"
                onClick={close}
                className="font-mono text-sm tracking-[0.04em] text-text-secondary transition-colors hover:text-text-primary"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <Button href={BOOKING_URL} variant="primary" className="mt-2 w-full">
              {t('nav.cta')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
