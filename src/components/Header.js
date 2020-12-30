import { useCallback, useContext, useMemo, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as ExpandIcon } from '../assets/icons/arrow-down.svg'
import { ReactComponent as ShrinkIcon } from '../assets/icons/arrow-up.svg'
import { SettingsContext } from '../settings'
import './Header.css'

export default function Header() {
  const navBarRef = useRef(null)
  const [isMobileNavVisible, setMobileNavVisible] = useState(false)

  const { settings, setLang } = useContext(SettingsContext)

  const toggleMobileNav = useCallback(() => {
    setMobileNavVisible((prev) => {
      if (prev) {
        navBarRef.current.classList.remove('expanded')
        navBarRef.current.classList.add('collapsed')
      } else {
        navBarRef.current.classList.remove('collapsed')
        navBarRef.current.classList.add('expanded')
      }
      return !prev
    })
  }, [])

  const langButtons = useMemo(() => {
    return (
      <>
        <button
          className={settings.lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          className={settings.lang === 'de' ? 'active' : ''}
          onClick={() => setLang('de')}
        >
          DE
        </button>
      </>
    )
  }, [settings.lang, setLang])

  return (
    <header className="Header">
      <Link className={'webtitle'} to="/">
        <h1>Minhaz Raufoon</h1>
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
          {langButtons}
        </div>
      </nav>

      <div className={'languageButtons'}>{langButtons}</div>
    </header>
  )
}
