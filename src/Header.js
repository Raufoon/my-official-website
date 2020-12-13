import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header className="Header">
      <h1>Minhaz Raufoon</h1>
      <nav>
        <NavLink exact to="/">
          Me
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/notice">Notice</NavLink>
      </nav>
    </header>
  )
}
