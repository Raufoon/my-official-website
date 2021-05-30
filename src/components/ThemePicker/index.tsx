import { toggleTheme } from "../../utils"
import style from "./index.module.css"
import { ReactComponent as MoonIcon } from "./moon-fill.svg"
import { ReactComponent as SunIcon } from "./sun.svg"
import { AppTheme } from "../../global-types"

interface Props {
  currentTheme: AppTheme
}

export default function ThemePicker(props: Props) {
  const isDark = props.currentTheme === "dark"
  const Icon = isDark ? MoonIcon : SunIcon

  return (
    <button className={style.ThemePicker} onClick={toggleTheme}>
      <Icon />
    </button>
  )
}
