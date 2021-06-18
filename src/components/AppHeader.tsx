import { useCallback, useContext, useMemo, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg"
import { SettingsContext } from "../contexts"
import ThemePicker from "./ThemePicker"
import { setLang } from "../utils"
import { AppSettings } from "../global-types"
import "./AppHeader.scss"

export default function AppHeader() {
  const navBarRef = useRef<HTMLDivElement>(null)

  const settings: AppSettings = useContext(SettingsContext)

  const toggleMobileNav = useCallback(() => {
    const { current } = navBarRef
    if (current) {
      const { classList } = current
      if (classList.contains("expanded")) {
        classList.remove("expanded")
        classList.add("collapsed")
      } else {
        classList.remove("collapsed")
        classList.add("expanded")
      }
    }
  }, [])

  const themePicker = useMemo(
    () => <ThemePicker currentTheme={settings.theme} />,
    [settings.theme]
  )

  const langButtons = useMemo(() => {
    return (
      <>
        <button
          className={settings.lang === "de" ? "active" : ""}
          onClick={() => setLang("de")}
        >
          DE
        </button>
        <button
          className={settings.lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </>
    )
  }, [settings.lang])

  return (
    <header className="AppHeader">
      <Link className={"webtitle"} to="/">
        <h2>Minhaz Raufoon</h2>
      </Link>

      <button className="navCollapseButton" onClick={toggleMobileNav}>
        <MenuIcon />
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

        <div className={"languageButtons forMobile"} onClick={toggleMobileNav}>
          {themePicker}
          {langButtons}
        </div>
      </nav>

      <div className={"languageButtons"}>
        {themePicker}
        {langButtons}
      </div>
    </header>
  )
}
