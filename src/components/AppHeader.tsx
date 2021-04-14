import { useCallback, useContext, useMemo, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as ExpandIcon } from '../assets/icons/menu.svg'
import { ReactComponent as ShrinkIcon } from '../assets/icons/arrow-up.svg'
import { SettingsContext } from '../contexts'
import ThemePicker from './ThemePicker'
import { setLang } from '../utils'
import './AppHeader.css'
import { AppSettings } from '../global-types'

export default function AppHeader() {
  const navBarRef = useRef<HTMLDivElement>(null)

  const [isMobileNavVisible, setMobileNavVisible] = useState(false)

  const settings: AppSettings = useContext(SettingsContext)

  const toggleMobileNav = useCallback(() => {
    setMobileNavVisible((prev) => {
      const { current } = navBarRef
      if (current) {
        const { classList } = current
        if (prev) {
          classList.remove('expanded')
          classList.add('collapsed')
        } else {
          classList.remove('collapsed')
          classList.add('expanded')
        }
      }
      return !prev
    })
  }, [])

  const langButtons = useMemo(() => {
    return (
      <>
        <button
          className={settings.lang === 'de' ? 'active' : ''}
          onClick={() => setLang('de')}
        >
          DE
        </button>
        <button
          className={settings.lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </>
    )
  }, [settings.lang])

  return (
    <header className="AppHeader">
      <Link className={'webtitle'} to="/">
        <h2>Minhaz Raufoon</h2>
      </Link>

      <button className="navCollapseButton" onClick={toggleMobileNav}>
        {isMobileNavVisible ? <ShrinkIcon /> : <ExpandIcon />}
      </button>

      <nav ref={navBarRef}>
        <NavLink exact to="/" onClick={toggleMobileNav}>
          Me
        </NavLink>

        <NavLink to="/projects" onClick={toggleMobileNav}>
          Projects
        </NavLink>

        <NavLink to="/resume" onClick={toggleMobileNav}>
          Resume
        </NavLink>

        <div className={'languageButtons forMobile'} onClick={toggleMobileNav}>
          <ThemePicker currentTheme={settings.theme} />
          {langButtons}
        </div>
      </nav>

      <div className={'languageButtons'}>
        <ThemePicker currentTheme={settings.theme} />
        {langButtons}
      </div>
    </header>
  )
}
