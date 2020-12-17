import { useCallback, useContext, useMemo, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as ExpandIcon } from "../assets/icons/arrow-down.svg"
import { ReactComponent as ShrinkIcon } from "../assets/icons/arrow-up.svg"
import { SettingsContext } from "../settings"
import "./Header.css"

export default function Header() {
  const navBarRef = useRef(null)
  const [isMobileNavVisible, setMobileNavVisible] = useState(false)

  const { settings, setLang } = useContext(SettingsContext)

  const toggleMobileNav = useCallback(() => {
    setMobileNavVisible((prev) => {
      if (prev) {
        navBarRef.current.style.display = "none"
      } else {
        navBarRef.current.style.display = "flex"
      }
      return !prev
    })
  }, [])

  const langButtons = useMemo(() => {
    return (
      <>
        <button
          className={settings.lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          className={settings.lang === "de" ? "active" : ""}
          onClick={() => setLang("de")}
        >
          DE
        </button>
      </>
    )
  }, [settings.lang, setLang])

  return (
    <header className="Header">
      <h1>Minhaz Raufoon</h1>

      <button className="navCollapseButton" onClick={toggleMobileNav}>
        {isMobileNavVisible ? <ShrinkIcon /> : <ExpandIcon />}
      </button>

      <nav ref={navBarRef}>
        <NavLink exact to="/">
          Me
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/notice">Notices</NavLink>
        <div className={"languageButtons forMobile"}>{langButtons}</div>
      </nav>

      <div className={"languageButtons"}>{langButtons}</div>
    </header>
  )
}
