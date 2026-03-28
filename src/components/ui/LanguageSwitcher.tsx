import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Language } from '../../lib/types'

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  { code: 'de', label: 'DE' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language?.substring(0, 2) as Language

  // Sync document lang attribute with current language
  useEffect(() => {
    document.documentElement.lang = current
  }, [current])

  function handleChange(lang: Language) {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex border border-border-hover">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`cursor-pointer border-r border-border-hover px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-all duration-200 last:border-r-0 ${
            current === code
              ? 'bg-accent font-medium text-[#0a0a0a]'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
