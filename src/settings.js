const { createContext, useState, useCallback, useEffect } = require('react')

const _SettingsContext = createContext({ lang: 'en' })

export const SettingsContext = _SettingsContext

export function useSettings() {
  const [settings, setSettings] = useState({
    lang: localStorage.getItem('lang') || 'en',
    theme: localStorage.getItem('theme') || 'dark',
  })

  useEffect(() => {
    function initTheme(theme) {
      if (theme === 'light') {
        document.body.style.setProperty('--color-bg', '#f5f5f5')
        document.body.style.setProperty(
          '--color-bg-blur',
          'rgba(245, 245, 245, 0.85)'
        )
        document.body.style.setProperty('--color-2', '#fff')
        document.body.style.setProperty('--color-text', '#0e1111')
        document.body.style.setProperty('--color-icon', '#0e1111')
        document.body.style.setProperty('--color-highlight', '#bf1932')
        document.body.style.setProperty('--color-shadow', 'lightgray')
        document.body.style.setProperty(
          '--invert-bio-highlights',
          'invert(100%)'
        )
      } else {
        document.body.style.setProperty('--color-bg', '#0e1111')
        document.body.style.setProperty('--color-bg-blur', 'rgba(0, 0, 0, 0.8)')
        document.body.style.setProperty('--color-2', '#232b2b')
        document.body.style.setProperty('--color-text', '#f1f1f1')
        document.body.style.setProperty('--color-icon', '#f1f1f1')
        document.body.style.setProperty('--color-highlight', '#f8db6e')
        document.body.style.setProperty('--color-shadow', 'transparent')
        document.body.style.setProperty('--invert-bio-highlights', undefined)
      }
    }
    initTheme(settings.theme)
  }, [settings.theme])

  const setLang = useCallback((lang) => {
    localStorage.setItem('lang', lang)
    setSettings((prev) => ({
      ...prev,
      lang,
    }))
  }, [])

  const toggleTheme = useCallback(() => {
    const theme = localStorage.getItem('theme')

    let newTheme
    if (theme === 'light') {
      newTheme = 'dark'
    } else {
      newTheme = 'light'
    }
    localStorage.setItem('theme', newTheme)
    setSettings((prev) => ({
      ...prev,
      theme: newTheme,
    }))
  }, [])

  return { settings, setLang, toggleTheme }
}
